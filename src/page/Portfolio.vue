<template>
    <div class="page portfolio_page">
        <slidesPortfolio></slidesPortfolio>
        <div class="page-nav" :class="$mq">
            <div class="page-nav-number">
                <span class="number-big" :class="$mq">04/</span>
                <span class="number-small" :class="$mq">07</span>
            </div>
            <div class="page-nav-text" :class="$mq">portfolio</div>
        </div>
    </div>

</template>
<script>
    export default {
        data () {
            return {

            }
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
        &.tablet, &.mobile {
            display: none;
        }
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
        font-family:$font-h2;
        letter-spacing: 2px;
    &.mobile {
         font-size: 12px;
     }
    }
</style>