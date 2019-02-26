<template>
    <transition name="menu-anim">
        <div class="page page-menu">
            <div class="menu-list" :class="$mq">
                <div class="my-nav">
                    <router-link to="/">
                        <button>
                            <span class="nav-item">главная</span>
                            <span class="button-bgc"></span>
                        </button>
                    </router-link>
                    <router-link to="/aboutUs">
                        <button @click="menuItemClicked('aboutUs')">
                            <span class="nav-item">о нас</span>
                            <span class="button-bgc"></span>
                        </button>
                    </router-link>
                    <router-link to="/services">
                        <button @click="menuItemClicked('services')">
                            <span class="nav-item">услуги</span>
                            <span class="button-bgc"></span>
                        </button>
                    </router-link>
                    <router-link to="/portfolio">
                        <button @click="menuItemClicked('portfolio')">
                            <span class="nav-item">портфолио</span>
                            <span class="button-bgc"></span>
                        </button>
                    </router-link>
                    <router-link to="/team">
                        <button @click="menuItemClicked('team')">
                            <span class="nav-item">команда</span>
                            <span class="button-bgc"></span>
                        </button>
                    </router-link>
                    <router-link to="/contacts">
                        <button @click="menuItemClicked('contacts')">
                            <span class="nav-item">контакты</span>
                            <span class="button-bgc"></span>
                        </button>
                    </router-link>
                    <router-link to="/blog">
                        <button @click="menuItemClicked('blog')">
                            <span class="nav-item">блог</span>
                            <span class="button-bgc"></span>
                        </button>
                    </router-link>
                </div>
                <div class="contacts">
                    <a href="" class="a-text" :class="$mq">написать письмо</a>
                    <div class="my-phone a-text mr-0">8-918-753-36-61</div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
 export default {
     data() {
         return {
         };
     },
     methods: {
         menuItemClicked: function (item) {
             if (this.$route.path == '/' + item) {
                 this.$emit('selfClicked');
             }
         }
     }
 }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";
    button {
        justify-content: flex-start;
    }
    button span.nav-item {
        margin-left: 60px;
    }
    .page-menu {
        width: 100%;
        height: 100vh;
        background-color: $bgc;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .menu-list {
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 85vh;
        justify-content: space-around;
        align-items: flex-start;
        margin: 15vh 0 0 60%;
        &.mobile {
            margin: 15vh 0 0 50%;
            width: 50%;
        }
    }
    .my-nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .contacts {
        width: 100%;
        display: flex;
    }
    .contacts .a-text {
        margin-left: 0;
        &.laptop, &.tablet {
            font-size: 1.8vh;
        }
        &.mobile {
            display: none;
        }
    }
    .contacts {
        justify-content: space-between;
    }
    .menu-anim-enter-active {
        animation: coming 1s;
        animation-delay: .5s;
        opacity: 0;
    }
    .menu-anim-leave-active {
        animation: going 1s;
    }

    @keyframes going {
        from {
            -webkit-clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
            clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
        }
        to {
            -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
            clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
        }

    }
    @keyframes coming {
        from {
            transform: translateX(-210px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
</style>