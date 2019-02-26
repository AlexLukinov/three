<template>
   <div class="page team_page">
        <div class="team-container" :class="$mq">
            <div class="team-item" :class="$mq">
                <div class="team-img team-img1" :class="$mq"></div>
                <div class="team-description" :class="$mq">
                    <h2 :class="$mq">Лукинов<br> Алексей</h2>
                    <h3 :class="$mq">Backend-разработчик</h3>
                </div>
            </div>
            <div class="team-item" :class="$mq">
                <div class="team-img team-img2" :class="$mq"></div>
                <div class="team-description" :class="$mq">
                    <h2 :class="$mq">Тихомолова<br> Алена</h2>
                    <h3 :class="$mq">Web-Designer</h3>
                </div>
            </div>
            <div class="team-item" :class="$mq">
                <div class="team-img team-img3" :class="$mq"></div>
                <div class="team-description" :class="$mq">
                    <h2 :class="$mq">Лукинова<br> Екатерина</h2>
                    <h3 :class="$mq">Frontend-разработчик</h3>
                </div>
            </div>
            <div class="team-item" :class="$mq">
                <div class="team-img team-img4" :class="$mq"></div>
                <div class="team-description" :class="$mq">
                    <h2 :class="$mq">Лукинов<br> Алексей</h2>
                    <h3 :class="$mq">Backend-разработчик</h3>
                </div>
            </div>
        </div>
       <div class="team-state" @click="showModal = true" :class="$mq">
           <h3 :class="$mq">Внештатные сотрудники</h3>
       </div>
       <div class="modal-state" v-show="showModal" @close="showModal = false">
           <h3 :class="$mq">Vbcnth skdfjslkd</h3>
           <h3 :class="$mq">Vbcnth skdfjslkd</h3>
           <h3 :class="$mq">Vbcnth skdfjslkd</h3>
           <h3 :class="$mq">Vbcnth skdfjslkd</h3>
           <h3 :class="$mq">Vbcnth skdfjslkd</h3>
           <div class="modal-back" @click="$emit('close')">
               <i class="fas fa-angle-left"></i>
           </div>
       </div>
       <div class="page-nav">
           <div class="page-nav-number">
               <span class="number-big" :class="$mq">05/</span>
               <span class="number-small" :class="$mq">07</span>
           </div>
           <div class="page-nav-text" :class="$mq">team</div>
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
    .team_page {
        position: absolute;
        z-index: 0;
        height: 100vh;
        margin-top: 0;
    }
    .team-container {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &.mobile {
            flex-direction: column;
        }
    }
    .team-item {
        width: 20%;
        border-right: 1px solid white;
        height: 100%;
        cursor: pointer;
        position: relative;
        &.mobile {
            width: 100%;
            height: 25%;
        }
    }
    .team-description {
        width: 90%;
        position: absolute;
        bottom: 16vh;
        height: 25vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        background-color: rgba(6, 2, 34, 0.78);
        &.mobile {
            height: 100%;
            width: 100%;
            top: 0;
            justify-content: flex-end;
        }
    }
    .team-description h2, .team-description h3 {
        margin-left: 15%;
    }
    .team-img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-image: none;
        &.mobile {
            background-position-y: 20%;
        }
    }
    @keyframes fade-img {
        0% {
            -webkit-clip-path: circle(0.4% at 0 50%);
            clip-path: circle(0.4% at 0 50%);
        }
        100% {
            -webkit-clip-path: circle(99.6% at 0 51%);
            clip-path: circle(99.6% at 0 51%);
        }
    }
    .team-item:hover .team-img1, .team-item.mobile .team-img1 {
        background-image: url("../assets/img/alex.jpg");
        animation: fade-img 1s ease;
    }
    .team-item:hover .team-img2, .team-item.mobile .team-img2 {
        background-image: url("../assets/img/helen.jpg");
        animation: fade-img 1s ease;
    }
    .team-item:hover .team-img3, .team-item.mobile .team-img3 {
        background-image: url("../assets/img/kate.jpg");
        animation: fade-img 1s ease;
    }
    .team-item:hover .team-img4, .team-item.mobile .team-img4 {
        background-image: url("../assets/img/misterx.jpg");
        animation: fade-img 1s ease;
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
    .team-state {
        position: absolute;
        bottom: 16.5vh;
        right: 2%;
        width: 15%;
        line-height: 2;
        cursor: pointer;
        &.mobile {
            display: none;
        }
    }
    .modal-state {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        background-color: $bgc;
        z-index: 5;
    }
    .modal-back {
        align-self: flex-start;
        margin-left: 15%;
        cursor: pointer;
    }
</style>