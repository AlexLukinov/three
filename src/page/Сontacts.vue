<template>
    <div class="page contacts-page" :class="$mq">
        <div class="contacts-block" :class="$mq">
            <h3 :class="$mq">Следуйте за нами</h3>
            <div class="media" :class="$mq">
                <a href="https://vk.com/codesstudio" class="a-text" :class="$mq">vkontakte</a>
                <a href="" class="a-text" :class="$mq">instagram</a>
                <a href="https://www.pinterest.ru/codesstudio/" class="a-text" :class="$mq">pinterest</a>
                <a href="https://twitter.com/katyushta" class="a-text" :class="$mq">twitter</a>
            </div>
        </div>
        <div class="contacts-block" :class="$mq">
            <h3 :class="$mq">Будьте на связи</h3>
            <div class="contacts" :class="$mq">
                <a href="" class="a-text" :class="$mq">написать письмо</a>
                <div class="my-phone a-text mr-0" :class="$mq">8-918-753-36-61</div>
            </div>
        </div>

        <div class="page-nav">
            <div class="page-nav-number">
                <span class="number-big" :class="$mq">06/</span>
                <span class="number-small" :class="$mq">07</span>
            </div>
            <div class="page-nav-text" :class="$mq">contacts</div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .contacts-page {
        justify-content: space-evenly;
        align-items: flex-start;
        background-image: url('../assets/img/img-bgc.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
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
    .media {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
    }
    .media a, .contacts a {
        margin: 0;
        &.mobile {
            font-size: 14px;
        }
    }
    .a-text {
        padding: 10px;
        padding-left: 0;
        font-size: 1.5vh;
        margin: 0;
        &.tablet, &.mobile {
            font-size: 16px;
        }

    }

    .contacts {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
    }

    .contacts-block {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        width: 35%;
        height: auto;
        margin-left: 5%;
        &.tablet {
            width: 60%;
        }
        &.mobile {
            width: 85%;
        }
    }
</style>