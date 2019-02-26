<template>
    <div class="page-slides">
        <transition name="myanim" mode="out-in">
            <div class="slides-body" :class="$mq"
                 v-for="number in [currentNumber]" v-bind:key="number">
                <h2 class="slides_text" :class="$mq">{{data.slides_text[currentNumber]}}</h2>
                <div class="slides_text_quote" :class="$mq">{{data.slides_text_quote[currentNumber]}}</div>
                <h3 class="slides_text_description" :class="$mq">{{data.slides_text_description[currentNumber]}}</h3>
            </div>
        </transition>
        <transition name="slider"
                    mode="out-in"
                    enter-active-class="animated fadeInRight"
                    leave-active-class="animated fadeOut">
            <!--<div class="image-slides" :class="$mq"-->
                 <!--v-for="number in [currentNumber]" v-bind:key="number">-->
                <!--<img :src="data.slides[currentNumber]">-->
            <!--</div>-->
            <canvas style="height: 100%;width: 100%;" ref="threejs" id="object-canvas"></canvas>
        </transition >
        <div class="button-box" :class="$mq">
            <button class="btn-slide btn-prev" @click="prev" :class="$mq">
                <i class="fas fa-angle-left"></i>
            </button>
            <button class="btn-slide btn-next" @click="next" :class="$mq">
                <i class="fas fa-angle-right"></i>
            </button>
        </div>
    </div>
</template>
<script>
    import * as THREE from 'three';
    // import GLTFLoader from 'three-gltf-loader';

    export default {
        data() {
            return {
                data: {
                    slides: [
                        'src/assets/img/vase.png',
                        'src/assets/img/pen.png',
                        'src/assets/img/hand.png',
                        'src/assets/img/pen.png'
                    ],
                    slides_text: [
                        'дизайн',
                        'разработка',
                        'продвижение',
                        'поддержка'
                    ],
                    slides_text_quote: [
                        '"Упаковка важна так же, как и продукт. Иногда даже важнее"' +
                        ' /Джек Траут/',
                        '"Суперменов не бывает. Всё значимое и судьбоносное создаётся с командой"' +
                        ' /Стив Джобс/',
                        '"Без рекламы произойдет самое ужасное — не произойдет ничего"' +
                        ' /Том Бискарди/',
                        '"Легко плыть, если кто-то другой поддерживает твою голову"' +
                        ' /Английская пословица/'
                    ],
                    slides_text_description: [
                        'Ничто не привлекает внимание людей так, как новые смелые идеи и ' +
                        'свежий практичный дизайн. Мы уверенны, что хороший дизайн должен быть ' +
                        'достаточно простым и распознаваемым в кратчайшие сроки, но одновременно с этим' +
                        'в меру сложным для сохранения своей уникальности. Именно такой дизайн способен ' +
                        'вызвать страсть к продукту.',

                        'Мы собрали в одном месте лучшую команду разработчиков, которые способны превратить ваши' +
                        ' идеи в цифровые решения. Каждый новый веб-проект мы строим с нуля, не используя' +
                        ' в своей практике шаблонов и конструкторов. Значительного повышения производительности ' +
                        'мы добиваемся используя сильный, прочный, современный стек технологий: Vue, cucue n hue ',

                        'Дальнейшее продвижение проекта нашими специалистами сделает процесс возрождения' +
                        ' (или перерождения) вашей идеи в сотни раз эффективнее. Грамотное сочетание поисковой информации,' +
                        ' копирайтинга и цифрового маркетинга создает устойчивое конкурентоспособное веб-решение,' +
                        ' оптимизированное для роста.',

                        'Своим клиентам мы хотим помочь максимально использовать их продукт, проект или услугу,' +
                        ' поэтому мы активно участвуем и после запуска, готовы и дальше заботиться о наших творениях,' +
                        ' обеспечивая успех заказчикам, достижение поставленных ими целей и видений.'
                    ]
                },
                currentNumber: 0,
                timer: null,
                activeLiIndex: null,
                renderer: null,
                scene: null,
                camera: null,
                geometry: null,
                material: null,
                mesh: null,
                controls: null,
                normalObject: null,
                meshObjects: [],
                pointsObjects: [],
            }
        },
        methods: {
            next: function () {
                if (this.currentNumber < this.data.slides.length - 1) {
                    this.currentNumber += 1
                } else {
                    this.currentNumber = 0
                }

                this.moveCamera('next');
            },
            prev: function () {
                if (this.currentNumber > 0) {
                    this.currentNumber -= 1
                } else {
                    this.currentNumber = this.data.slides.length - 1
                }

                this.moveCamera('prev');
            },
            moveCamera: function (step) {
                let offsetPosition = 0;
                let offsetPositionStep = 0.01;
                let offsetLength = 3;

                setInterval(() => {
                    offsetPosition += offsetPositionStep;

                    if (offsetPosition < offsetLength) {
                        if (step === 'next') {
                            this.camera.position.x += offsetPositionStep;
                        } else {
                            this.camera.position.x -= offsetPositionStep;
                        }
                    }
                }, 10);
            },
            loadMyModel() {
                this.scene = new THREE.Scene();
                // this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
                let viewSize = 12;
                let height = this.$refs.threejs.clientHeight;
                let width = this.$refs.threejs.clientWidth;

                let aspectRatio = width/height;
                this.camera = new THREE.OrthographicCamera( - aspectRatio*viewSize / 2, aspectRatio*viewSize / 2, viewSize / 2, -viewSize/2, -100, 500 );
                // this.camera.position.z = 10;
                // this.camera.position.y = 10;
                // this.camera.position.x = 10;
                this.renderer = new THREE.WebGLRenderer({
                    canvas: this.$refs.threejs,
                    antialias: true,
                    alpha: true
                });

                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.setSize(window.innerWidth, window.innerHeight);

                // this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
                // this.controls.enableDamping = true;
                // this.controls.dampingFactor = 0.25;
                // this.controls.enableZoom = true;

                this.keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
                this.keyLight.position.set(-100, 0, 100);

                this.fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
                this.fillLight.position.set(100, 0, 100);

                this.backLight = new THREE.DirectionalLight(0xffffff, 1.0);
                this.backLight.position.set(100, 0, -100).normalize();

                this.scene.add(this.keyLight);
                this.scene.add(this.fillLight);
                this.scene.add(this.backLight);


                // this.loadPointsModel();
                // this.loadMeshModel();
                // this.loadNormalModel();
                this.loadAllModels();

                var animate = () => {
                    requestAnimationFrame( animate );
                    // this.controls.update();
                    this.renderer.render(this.scene, this.camera);

                    if (this.pointsObjects) {
                        this.pointsObjects.forEach(object => {
                            // object.rotation.x += 0.01;
                            object.rotation.y += 0.005;
                        });
                    }

                    if (this.meshObjects) {
                        this.meshObjects.forEach(object => {
                            // object.rotation.x += 0.01;
                            object.rotation.y += 0.005;
                        });
                    }

                    if (this.normalObject) {
                        // this.normalObject.rotation.x += 0.01;
                        this.normalObject.rotation.y -= 0.005;
                    }
                };
                animate();
            },
            loadAllModels() {
                let texture = new THREE.Texture();

                let imageLoader = new THREE.ImageLoader();

                imageLoader.load('/Textures/lotus_textures/lotus_petal_diffuse.jpg', function(image) {
                    texture.image = image;
                    texture.needsUpdate = true;
                });

                let loader = new THREE.OBJLoader();

                loader.load('lotus_OBJ_high.obj', object => {
                    // load normal object
                    this.normalObject = object;
                    this.normalObject.rotation.x += 0.9;

                    // load points models
                    let modifier = new THREE.SimplifyModifier();
                    let meshMaterial = new THREE.MeshBasicMaterial({wireframe: true, color: 0xfb9fbc});
                    let pointsMaterial = new THREE.PointsMaterial({color: 0xff0ff, size: 0.01});
                    object.traverse(child => {
                        if (child instanceof THREE.Mesh) {
                            this.pointsObjects.push(new THREE.Points(child.geometry, pointsMaterial));
                            this.meshObjects.push(this.makeSimplifiedMesh(child.clone(), meshMaterial, modifier));
                            child.material.map = texture;
                        }
                    });

                    this.scene.add(this.normalObject);

                    this.pointsObjects.forEach(object => {
                        object.position.x = 2;
                        object.rotation.x -= 0.9;
                        this.scene.add(object)
                    });

                    // load mesh models
                    this.meshObjects.forEach(object => {
                        object.position.x = -2;
                        object.rotation.x -= 0.9;
                        this.scene.add(object);
                    });
                });
            },
            // loadNormalModel() {
            //     let texture = new THREE.Texture();
            //
            //     let imageLoader = new THREE.ImageLoader();
            //
            //     imageLoader.load('/Textures/lotus_textures/lotus_petal_diffuse.jpg', function(image) {
            //         texture.image = image;
            //         texture.needsUpdate = true;
            //     });
            //     // imageLoader.load('/Textures/lotus_textures/lotus_petal_bump.jpg', function(image) {
            //     //     texture.image = image;
            //     //     texture.needsUpdate = true;
            //     // });
            //     // imageLoader.load('/Textures/lotus_textures/lotus_petal_glossiness.jpg', function(image) {
            //     //     texture.image = image;
            //     //     texture.needsUpdate = true;
            //     // });
            //
            //     let loader = new THREE.OBJLoader();
            //
            //     loader.load('lotus_OBJ_high.obj', object => {
            //         object.traverse(child => {
            //             if (child instanceof THREE.Mesh) {
            //                 child.material.map = texture;
            //             }
            //         });
            //
            //         this.objects.push(object);
            //
            //         this.objects.forEach(object => {
            //             this.scene.add(object)
            //         })
            //     });
            // },
            // loadPointsModel() {
            //     let loader = new THREE.OBJLoader();
            //
            //     loader.load('lotus_OBJ_high.obj', object => {
            //         let material = new THREE.PointsMaterial({color: 0xff0ff, size: 0.01});
            //
            //         object.traverse(child => {
            //             if (child instanceof THREE.Mesh) {
            //                 this.objects.push(new THREE.Points(child.geometry, material));
            //             }
            //         });
            //
            //         this.objects.forEach(object => {
            //             this.scene.add(object)
            //         })
            //     });
            // },
            // loadMeshModel() {
            //     var loader = new THREE.OBJLoader();
            //
            //     loader.load('lotus_OBJ_high.obj', object => {
            //         let modifier = new THREE.SimplifyModifier();
            //
            //         let material = new THREE.MeshBasicMaterial({wireframe: true, color: 0xfb9fbc});
            //
            //         object.traverse(child => {
            //             this.objects.push(child);
            //         });
            //
            //         this.objects.forEach(item => {
            //             if (item instanceof THREE.Mesh) {
            //                 this.scene.add(this.makeSimplifiedMesh(item, material, modifier));
            //             }
            //         });
            //
            //         object.position.y = 0;
            //     });
            // },
            makeSimplifiedMesh(mesh, material, modifier) {
                mesh.material = material;
                mesh.material.flatShading = true;
                let count = Math.floor( mesh.geometry.attributes.position.count * 0.15 ); // number of vertices to remove
                mesh.geometry = modifier.modify( mesh.geometry, count );

                return mesh;
            }
        },
        computed: {
            strokeWidth: function () {
                let oneStep = 600 / this.data.slides.length;
                return oneStep * (this.currentNumber + 1)
            }
        },
        mounted() {
            this.loadMyModel();
        },
        // mounted: function () {
        //     setInterval(() => {
        //         this.next();
        //     }, 10000);
        // }
    }


</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .page-slides {
        display: flex;
        justify-content: space-between;
        width: 90%;
        height: 80vh;
        align-items: center;
        margin-top: 5vh;
    }
    .slides-body {
        width: 40%;
        &.mobile {
            width: 55%;
        }
    }
    .slides-body>div {
        display: flex;
        align-items: center;
    }
    .slides_text {
        font-size: 6.5vh;
        font-weight: bold;
        text-transform: capitalize;
        text-align: left;
        &.mobile {
            font-size: 30px;
        }
    }
    .slides_text_quote {
        font-size: 18px;
        font-family: $font-quote;
        text-align: left;
        letter-spacing: 2px;
        margin-bottom: 3.83em;
        &.laptop {
            font-size: 16px;
        }
        &.tablet{
            font-size: 14px;
        }
        &.mobile{
            font-size: 12px;
        }
    }
    .image-slides {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
    }
    .slider-nav {
        width: 40%;
        height: 70%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .slider-nav ul {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 65%;
    }
    .image-slides.mobile img {
        width: 100%;
        z-index: -1;
    }
    .button-box {
        position: absolute;
        top: 80%;
        right: 13%;
        display: flex;
        justify-content: space-between;
        width: 150px;
        &.mobile {
            width: 100px;
        }
    }
    .btn-slide {
        background-color: #242135;
        width: 60px;
        height: 60px;
        transition: all 1s ease;
        &.mobile {
            width: 45px;
            height: 45px;
        }
    }
    .btn-slide:hover {
        background-color: #9e0760;
    }
    .slide_line {
        position: absolute;
        bottom: 10vh;
        left: 22%;
    }
    .myanim-enter-active {
        animation: myanim ease 1s;
    }
    .myanim-leave-active {
        animation: myanimout ease 1s;
    }
    @keyframes myanim {
        0% {
            -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
            clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
        }
        100% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }
    @keyframes myanimout {
        0% {
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
        100% {
            -webkit-clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        }
    }
    .roll-enter-active {
        transform: scale(0.5);
    }
    .roll-leave-active {
        transform: scale(0);
    }
    .active {
        background-color: palegreen;
    }


</style>