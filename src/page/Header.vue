<template>
    <div class="header" :class="$mq">
        <a href="#" class="logo">codes</a>
        <div class="lang" :class="$mq">
            <span class="lang-active" :class="$mq">ru</span>
            <div class="lang-divider"></div>
            <span :class="$mq">en</span>
        </div>

            <div class="menu-icon">
                <div class="toggleTopMenu">
                        <div class="main-item menu" @click="showTopMenu = !showTopMenu" v-if="!showTopMenu" :class="$mq">
                            <span class="line" :class="$mq"></span>
                            <span class="line" :class="$mq"></span>
                            <span class="line" :class="$mq"></span>
                        </div>
                        <div v-else @click="onCloseClicked">
                            <div class="main-item main-item-close" :class="$mq">
                                <span class="line line1-rotate" :class="$mq"></span>
                                <span class="line line2-rotate" :class="$mq"></span>
                            </div>
                        </div>
                </div>
            </div>
        <my-menu v-show="showTopMenu" @selfClicked="showTopMenu = false"></my-menu>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                showTopMenu: false,
            };
        },
        methods: {
            onCloseClicked: function () {
                this.showTopMenu = false;
            }
        },
        watch:{
            $route (to, from){
                this.showTopMenu = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    .header {
        z-index: 3;
        display: flex;
        justify-content: space-between;
        width: 90%;
        height: 10vh;
        color: white;
        margin: auto;
        align-items: center;
        position: absolute;
        top: 3vh;
        left: 5%;
        &.mobile {
            height: 5vh;
         }
    }
    .menu-icon {
        z-index: 10;
    }
    .main-item {
        width: 45px;
        height: 24px;
        z-index: 20;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-self: flex-end;
        &.laptop, &.tablet {
            width: 40px;
            height: 19px;
        }
        &.mobile {
            width: 30px;
            height: 17px;
        }
    }

    .line {
        height: 4px;
        width: 45px;
        background: white;
        &.laptop, &.tablet {
            width: 40px;
            height: 3px;
        }
        &.mobile {
            width: 30px;
            height: 3px;
        }
    }
    .line1-rotate {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
    }
    .line2-rotate {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        position: absolute;
    }
    .main-item-close {
        justify-content: center;
        align-items: center;
    }
    a.logo {
        font-family: $font-h1;
        font-size: 4vh;
        color: white;
        &.laptop, &.tablet {
            font-size: 3.5vh;
        }
        &.mobile {
            font-size: 3vh;
        }
    }
    .lang {
        text-align: center;
        display: flex;
        align-items: center;
        width: 100px;
        height: 30px;
        justify-content: space-between;
        &.laptop {
            width: 90px;
            height: 20px;
        }
        &.tablet {
            width: 80px;
            height: 20px;
        }
        &.mobile {
            width: 70px;
            height: 15px;
        }
    }
    .lang span {
        font-family: $font-text;
        font-size: 30px;
        letter-spacing: 3px;
        cursor: pointer;
        &.laptop {
            font-size: 26px;
        }
        &.tablet {
            font-size: 22px;
        }
        &.mobile {
            font-size: 20px;
        }
    }
    .lang-active {
        color: #ff0096;
    }
    .lang-divider {
        width: 1px;
        height: 100%;
        background-color: white;
    }
</style>