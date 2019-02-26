<template>
    <div class="page-slides">
        <div class="image-slides" :class="$mq">
            <transition class="slider-body" name="myanim" mode="out-in">
                <div v-for="number in [currentNumber]" v-bind:key="number">
                    <img :src="data.slides[currentNumber]" width="100%">
                </div>
            </transition>
        </div>
        <div class="slide-container" :class="$mq">
            <transition name="myanim" mode="out-in">
                <div v-for="number in [currentNumber]" v-bind:key="number">
                    <span class="slides_text" :class="$mq">{{data.slides_text[currentNumber]}}</span>
                </div>
            </transition>
            <transition name="myanim" mode="out-in">
                <div v-for="number in [currentNumber]" v-bind:key="number">
                    <p class="slides_text" :class="$mq">{{data.slides_text_description[currentNumber]}}</p>
                </div>
            </transition>
            <transition name="myanim" mode="out-in">
                <div v-for="number in [currentNumber]" v-bind:key="number">
                    <a v-bind:href="data.slides_href[currentNumber]"
                       class="slide-a"
                       :class="$mq">перейти на сайт
                    </a>
                </div>
            </transition>
        </div>
        <div class="button-box" :class="$mq">
            <button class="btn-slide btn-prev" @click="prev">
                <i class="fas fa-angle-left"></i>
            </button>
            <button class="btn-slide btn-next" @click="next">
                <i class="fas fa-angle-right"></i>
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: {
                    // [{slide: , slideText}, {}]
                    slides: [
                        'src/assets/img/mastergadget.jpg',
                        'src/assets/img/baraholka.jpg',
                    ],
                    slides_text: [
                        'mastergadget.pro',
                        'baraholkafest26.ru',
                    ],
                    slides_text_description: [
                        'При создании сайта для крымской компании MasterGadget ' +
                        'перед нами стояла задача представить их деятельность и услуги ' +
                        'в лучшем ракурсе, повысить конкурентоспособность и узнаваемость ' +
                        'в регионе, наладить обратную связь с клиентами. В итоге получили изящный лендинг ' +
                        'с перечислением услуг, возможностью оставить заявку или заказать обратный звонок , ' +
                        'с возможностью узнавать последние новости и познавательные статьи компании',
                        'Танцевальный проект Барахолка - это уникальный проект, объединяющий танцоров всех стилей\n' +
                        'и направлений, а также ценителей и любителей этого вида искусства в ' +
                        'одно грандиозное масштабное танцевальное шоу. Сайт должен был соответствовать уровню ' +
                        'и передавать стиль, посыл, настрой, энергетику мероприятия. Удобное и логичное разделение информации' +
                        'на страницах, разделение на модули, соответствующие частям проекта, а главное - возможность ' +
                        'оставить заявку он-лайн!'
                    ],
                    slides_href: [
                        'http://mastergadget.pro/',
                        'http://baraholkafest26.ru',
                    ],
                },
                currentNumber: 0,
                timer: null
            }
        },
        methods: {
            next: function () {
                if (this.currentNumber < this.data.slides.length - 1) {
                    this.currentNumber += 1
                } else {
                    this.currentNumber = 0
                }
            },
            prev: function () {
                if (this.currentNumber > 0) {
                    this.currentNumber -= 1
                } else {
                    this.currentNumber = this.data.slides.length - 1
                }
            }
        },
        computed: {
            strokeWidth: function () {
                let oneStep = 600 / this.data.slides.length;
                return oneStep * (this.currentNumber + 1)
            }
        }
    }

</script>
<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .page-slides {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 85vh;
        margin-top: 5vh;
        align-items: center;
        position: relative;
    }
    span.slides_text {
        font-family: $font-h2;
        font-size: 30px;
        font-weight: bold;
        &.mobile {
            font-size: 20px;
        }
    }
    .image-slides {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 60%;
        max-width: 835px;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        filter: hue-rotate(230deg);
        transition: all 0.3s ease;
       &.tablet {
            width: 90%;
        }
        &.mobile {
            width: 100%;
        }
    }
    .image-slides:hover {
        filter: none;
    }
    .slide-container {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        width: 40%;
        max-width: 600px;
        height: 50vh;
        background-color: rgba(6, 2, 34, 0.78);
        &.laptop {
            width: 70%;
            height: 60vh;
        }
        &.tablet {
            width: 90%;
            height: 80vh;
        }
        &.mobile {
            width: 90%;
            height: 100vh;
        }
    }
    .slide-container p {
        width: 80%;
        font-family: $font-text;
        font-size: 16px;
        margin: auto;
        line-height: 1.5;
        &.mobile {
            font-size: 13px;
        }
    }
    .btn-slide {
        border: 1px solid white;
        z-index: 1;
        top: 0;
        width: 50px;
        height: 50px;
    }
    .button-box {
        position: absolute;
        top: 90%;
        right: 10%;
        display: flex;
        justify-content: space-between;
        width: 80%;
    }
    .myanim-enter-active {
        animation: myanim ease 1s;
    }
    .myanim-leave-active {
        animation: myanimout ease 1s;
    }
    a.slide-a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 250px;
        height: 60px;
        font-family: $font-h2;
        font-size: 16px;
        border: 1px solid white;
        &.tablet, &.mobile {
            width: 160px;
            height: 40px;
        }
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
</style>