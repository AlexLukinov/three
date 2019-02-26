<template>
    <div class="page blog-page">
        <!--<div class="post-container">-->
            <!--<transition name="myanim" mode="out-in">-->
                <!--<div class="post" v-for="number in [currentNumber]" v-bind:key="number">-->
                    <!--<h2 class="post-title">{{data.postTitle[currentNumber]}}</h2>-->
                    <!--<h3 class="post-description">{{data.postDescription[currentNumber]}}</h3>-->
                    <!--<h4 class="post-author">{{data.postAuthor[currentNumber]}}</h4>-->
                <!--</div>-->
            <!--</transition>-->
            <!--<div class="post-img">-->
                <!--<transition class="slider-body" name="anim-img"-->
                            <!--enter-active-class = "animated fadeInDownBig"-->
                            <!--leave-active-class = "animated bounceIn"-->
                            <!--mode="out-in">-->
                    <!--<img :src="data.postImg[currentNumber]">-->
                <!--</transition>-->
            <!--</div>-->
            <!--<div class="button-box">-->
                <!--<button class="btn-slide btn-prev" @click="prev">-->
                    <!--<i class="fas fa-angle-up"></i>-->
                <!--</button>-->
                <!--<button class="btn-slide btn-next" @click="next">-->
                    <!--<i class="fas fa-angle-down"></i>-->
                <!--</button>-->
            <!--</div>-->
        <!--</div>-->
        <span class="blog-text" :class="$mq">мы пишем очень много статей,
            они появятся здесь, как только их одобрит главный редактор
        </span>
        <div class="page-nav">
            <div class="page-nav-number">
                <span class="number-big" :class="$mq">07/</span>
                <span class="number-small" :class="$mq">07</span>
            </div>
            <div class="page-nav-text" :class="$mq">blog</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: {
                    postImg: [
                        'src/assets/img/post1.jpg',
                        'src/assets/img/post2.jpg',
                        'src/assets/img/post3.jpg',
                        'src/assets/img/post4.jpg'
                    ],
                    postTitle: [
                        'Почему Россия проигрывает в Венесуэле',
                        'разработка',
                        'продвижение',
                        'поддержка'
                    ],
                    postDescription: [
                        'Устоит ли признаваемый нами президентом Венесуэлы Мадуро, не устоит ли — вопрос, ' +
                        'который будет решаться не у нас в Кремле, и даже не в Вашингтоне, на самом деле, а на улицах Каракаса',
                        'Уникальный дизайн, web,b nfr lfktt? tb tot xnjnj',
                        'Уникальный дизайн, web,b nfr lfktt? tb tot xnjnj',
                        'Уникальный дизайн, web,b nfr lfktt? tb tot xnjnj'
                    ],
                    postAuthor: [
                        'Лукинов Алексей',
                        'Лукинова Екатерина',
                        'Тихомолова Алена',
                        'Лукинов Алексей'
                    ]
                },
                currentNumber: 0,
                timer: null,
            }
        },
        methods: {
            next: function () {
                if (this.currentNumber < this.data.postImg.length - 1) {
                    this.currentNumber += 1
                } else {
                    this.currentNumber = 0
                }
            },
            prev: function () {
                if (this.currentNumber > 0) {
                    this.currentNumber -= 1
                } else {
                    this.currentNumber = this.data.postImg.length - 1
                }
            },
        },
        computed: {
            strokeWidth: function () {
                let oneStep = 600 / this.data.postImg.length;
                return oneStep * (this.currentNumber + 1)
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .blog-page {
        flex-direction: row;
     }
    .post-container {
        width: 90%;
        height: 80%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .post-img {
        width: 50%;
        overflow: hidden;
    }
    .post-img img {
        width: 100%;
    }
    .post {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 40%;
        align-items: flex-start;
    }
    .blog-text {
        font-family: $font-h2;
        font-size: 2.5vh;
    }
    .page-nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        color: white;
        position: absolute;
        top: 48%;
        right: 5%;
    }
    .page-nav-number {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    span.number-big {
        font-family: $font-h2;
        font-size: 50px;
        line-height: 1;
        &.mobile {
            font-size: 30px;
        }
    }
    span.number-small {
        font-family: $font-h2;
        font-size: 25px;
        line-height: 1;
        &.mobile {
            font-size: 15px;
        }
    }
    .page-nav-text {
        font-size: 18px;
        font-family: $font-h2;
        letter-spacing: 2px;
        &.mobile {
            font-size: 12px;
        }
    }
    .blog-text {
        padding: 80px;
    }
</style>