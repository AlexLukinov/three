<template>
    <div class="page services_page">
        <slides-services></slides-services>
        <div class="page-nav">
            <div class="page-nav-number">
                <span class="number-big" :class="$mq">03/</span>
                <span class="number-small" :class="$mq">07</span>
            </div>
            <div class="page-nav-text" :class="$mq">services</div>
        </div>
        <my-footer></my-footer>
    </div>

</template>
<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
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