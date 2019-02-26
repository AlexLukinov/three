<template>
    <div class="footer">
        <div class="footer-button">
            <button type="button"
                    :class="$mq"
                    id="show-modal"
                    @click="showModal = true">
                <span class="button-bgc" :class="$mq"></span>
                заказать услугу
            </button>
            <modal-order v-show="showModal" @close="showModal = false"></modal-order>
        </div>
        <div class="media" :class="$mq">
            <a href="https://vk.com/codesstudio" class="a-text">vkontakte</a>
            <a href="" class="a-text">instagram</a>
        </div>
        <div class="media-mob" :class="$mq">
            <a href="" class="a-text" :class="$mq"><i class="fab fa-instagram"></i></a>
            <a href="" class="a-text" :class="$mq"><i class="fab fa-vk"></i></a>
        </div>
        <div class="contacts" :class="$mq">
            <a href="" class="a-text" :class="$mq">написать письмо</a>
            <div class="my-phone a-text mr-0">8-918-753-36-61</div>
        </div>
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

    .footer {
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
        &.tablet, &.mobile {
            display: none;
        }
    }
    .media-mob {
        display: none;
        &.tablet, &.mobile {
            display: flex;
            width: 30%;
            height: 100%;
            justify-content: flex-end;
            align-items: center;
        }
    }

    .footer-button {
        /*width: 25%;*/
        /*height: 100%;*/
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
    .contacts {
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &.tablet, &.mobile {
            display: none;
        }
    }
</style>