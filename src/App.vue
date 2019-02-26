<template>
    <div id="app" @wheel="onWheel">
        <my-header></my-header>
        <transition name="router-anim">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            onWheel(event) {
                var delta = event.deltaY
                var routes = this.$router.options.routes
                var idx = routes.findIndex(item => item.path === this.$route.path)
                if (delta > 0 && idx < routes.length - 1) {
                    this.$router.push(routes[idx + 1])
                }
                if (delta < 0 && idx > 0) {
                    this.$router.push(routes[idx - 1])
                }

            }
        }
    }
</script>

<style>
    .router-anim-enter-active {
        animation: coming 1s;
        animation-delay: .5s;
        opacity: 0;
    }
    .router-anim-leave-active {
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
