<template>
    <div class="page home_page">
        <div class="home-content" :class="$mq">
            <div class="home-text" :class="$mq">
                <h1 :class="$mq">CODES</h1>
                <h2 :class="$mq">
                    агентство цифрового дизайна и разработки,
                    способное создавать сайты,
                    которые нравятся людям.
                </h2>
            </div>
        </div>
        <div class="home-footer">
            <div class="text-block">
                <div class="text-block-h">
                    Разработка
                </div>
                <div class="text-block-p">
                    для умных компаний
                </div>
            </div>
            <div class="text-block aic">
                <div class="text-block-h">
                    Дизайн
                </div>
                <div class="text-block-p">
                    для большого потока клиентов
                </div>
            </div>
            <div class="text-block aie">
                <div class="text-block-h">
                    Продвижение
                </div>
                <div class="text-block-p tar">
                    для поиска новых источников дохода
                </div>
            </div>
        </div>
        <div class="page-nav">
            <div class="page-nav-number">
                <span class="number-big" :class="$mq">01/</span>
                <span class="number-small" :class="$mq">07</span>
            </div>
            <div class="page-nav-text" :class="$mq">home</div>
        </div>
        <div class="scroll" :class="$mq">scroll down</div>
    </div>
</template>
<script>
    export default {

        data() {
            return {}
        },

        mounted: function () {

        }
    }


</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    h1 {
        font-family: $font-h1;
        font-size: 12vh;
        line-height: 0;
        z-index: 1;
        &.laptop {
            font-size: 18vh;
        }
    }
    .home-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 70vh;
        margin: auto;
        margin-top: 10vh;
        &.tablet, &.mobile {
            height: 80vh;
            align-items: center;
        }
    }
    .home-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 49%;
        height: 80%;
        &.tablet, &.mobile {
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 100%;
        }
    }
    .home-img {
        width: 49%;
        &.tablet, &.mobile {
            width: 90%;
            position: absolute;
        }
    }
    .home-img img {
        width: 60%;
    }
    .page-nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        color: white;
        position: absolute;
        top: 46%;
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
    .home-footer {
        width: 90%;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
    }
    .media {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

    }
    .home-button {
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    button {
        position: relative;
        z-index: 2;
    }

    .mr-0 {
        margin-right: 0;
    }
    h2 {
        font-size: 2vh;
        text-align: center;
    }
    .text-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 33%;
    }
    .text-block-h {
        font-size: 2vh;
        font-family: $font-h2;
    }
    .text-block-p {
        font-size: 1.5vh;
        font-family: $font-text;
    }
    .aic {
        align-items: center;
    }
    .aie {
        align-items: flex-end;
    }
    .scroll {
        position: absolute;
        transform: rotate(90deg);
        font-family: $font-h2;
        font-size: 2.5vh;
        top: 50%;
        left: 2.5%;
        animation: scroll 2s linear infinite alternate;
        &.tablet, &.mobile {
            display: none;
        }
    }
    @keyframes scroll {
        0% {
            -webkit-clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
            clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
        }
        20% {
            -webkit-clip-path: polygon(100% 0, 20% 0, 0 100%, 100% 100%);
            clip-path: polygon(100% 0, 20% 0, 0 100%, 100% 100%);
        }
        40% {
            -webkit-clip-path: polygon(100% 0, 40% 0, 20% 100%, 100% 100%);
            clip-path: polygon(100% 0, 40% 0, 20% 100%, 100% 100%);
        }
        60% {
            -webkit-clip-path: polygon(100% 0, 60% 0, 40% 100%, 100% 100%);
            clip-path: polygon(100% 0, 60% 0, 40% 100%, 100% 100%);
        }
        80% {
            -webkit-clip-path: polygon(100% 0, 80% 0, 60% 100%, 100% 100%);
            clip-path: polygon(100% 0, 80% 0, 60% 100%, 100% 100%);
        }
        100% {
            -webkit-clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        }
    }
    .tar {
        text-align: right;
    }

</style>