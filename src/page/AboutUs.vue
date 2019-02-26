<template>
    <div class="page about-us_page">
        <div class="about-us-content" :class="$mq">
            <div class="about-us-text" :class="$mq">
                <h3 :class="$mq">
                    Наша команда - это креативные и профессиональные разработчики со свежими идеями и мыслями.
                    Мы искренне верим в мощность целенаправленного дизайна, способного возродить бизнес,
                    вознести компанию или организацию над конкурентами, повысить статус социального
                    проекта до уровня "premium".
                    Нам интересен только результат, которым мы сможем гордиться!
                    Для наших клиентов мы используем
                    индивидуальный подход, который полностью прозрачен и
                    сосредоточен вокруг совместной работы.
                </h3>
            </div>
            <div class="home-img" :class="$mq">
                <img src="src/assets/img/img-abus.png" alt="">
            </div>
        </div>
        <div class="page-nav">
            <div class="page-nav-number">
                <span class="number-big" :class="$mq">02/</span>
                <span class="number-small" :class="$mq">07</span>
            </div>
            <div class="page-nav-text" :class="$mq">about us</div>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showModal: false,
            };
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";

    .about-us-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        height: 70vh;
        margin: auto;
        margin-top: 15vh;
    }
    .about-us-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 49%;
        height: 80%;
        &.mobile {
            width: 80%;
            height: 100%;
        }
    }
    .home-img {
        width: 49%;
        &.mobile {
            display: none;
        }
    }
    .home-img img {
        width: 100%;
    }
    .page-nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        color: white;
        position: absolute;
        top: 50%;
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

</style>