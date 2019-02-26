<template id="modalOrder">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" :class="$mq">
          <div class="modal-header" :class="$mq">
            <button class="modal-close" @click="$emit('close')">
              <i class="fas fa-times"></i>
            </button>
            <div class="modal-h1" :class="$mq">
              Оставьте свои контактные данные и мы свяжемся с вами сами!
            </div>
          </div>

          <div class="modal-body" :class="$mq">
            <slot name="body">
              <div class="modal-input" :class="$mq">
                <label>Ваше Имя</label>
                <input type="text" placeholder="">
              </div>
              <div class="modal-input" :class="$mq">
                <label>Номер телефона</label>
                <input type="text" placeholder="">
              </div>
              <div class="modal-input" :class="$mq">
                <label>E-mail</label>
                <input type="email" placeholder="">
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')" :class="$mq">
                Оставить заявку
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
    export default {
        data() {
          return {}
        },
    }
</script>
<style lang="scss" scoped>
  @import "../assets/scss/variables";
    .modal-mask {
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 50%;
        margin: 0 auto;
        background-color: #030111;
        border: 1px solid $color-akc;
        transition: all .3s ease;
        height: 50vh;
        min-height: 300px;
        color: white;
        background-image: url('../assets/img/img-bgc.png');
        background-repeat: no-repeat;
        background-size: cover;
      &.tablet {
        width: 75%;
      }
      &.mobile {
        width: 90%;
        height: 60vh;
        max-height: 100vh;
      }
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 20px 0;
      height: 60%;
      &.mobile {
        margin: 0;
      }
    }

    .modal-default-button {
      margin: auto;
      color: $bgc;
      transition: all 1s ease;
      background-color: #e0ccdf;
      border: 1px solid $bgc;
    }
    .modal-default-button:hover {
      background-color: $color-akc;
      color: white;
    }
    .modal-close {
      color: white;
      position: absolute;
      right: -25px;
      top: -25px;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: $color-akc;
      transition: all 1s ease;
    }
    .modal-close:hover {
      background-color: $bgc;
    }
    .modal-input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin: auto;
      width: 60%;
      &.mobile {
        width: 80%;
      }
    }
    .modal-input label {
      font-family: $font-h2;
      letter-spacing: 1px;
      font-size: 1.8vh;
      padding-top: 10px;
    }
    .modal-input input {
      width: 100%;
      height: 50px;
      border: 1px solid $color-akc;
      margin-top: 10px;
      font-size: 25px;
      padding-left: 10px;
      font-family: $font-text;
      background-color: $bgc;
      opacity: 0.3;
      color: white;
    }
  .modal-input input:active, .modal-input input:focus, .modal-input input:hover {
    opacity: 1;
  }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
  .modal-h1 {
    font-family: $font-h1;
    color: white;
    font-size: 2vh;
    &.mobile {
      padding: 10px;
    }
  }
</style>