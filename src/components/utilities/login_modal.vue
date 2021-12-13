<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="container">
            <div class="modal-container">
              <button class="btn-close" @click="$emit('close')"></button>
              <transition name="slide" v-if="isLogin">
                <login-form @hasRegister="isLogin = false" />
              </transition>
              <transition name="slide" v-else>
                <register-form @hasLogin="isLogin = true" />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import loginForm from "@/components/pages/auth/login_auth_page";
import registerForm from "@/components/pages/auth/register_auth_page";
export default {
  name: "LoginBox",

  data() {
    return {
      isLogin: true,
      isLoading: false,
    };
  },

  components: {
    loginForm,
    registerForm,
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.424);
  display: table;
  transition: opacity 0.3s ease;
  padding-top: 5%;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: center;
}

.btn-close {
  height: 50px;
  width: 50px;

  border-radius: 50em;
  color: #fff;
  z-index: 1000;
  position: absolute;
  top: 0;
  right: 0;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 10px;
  z-index: 1000;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

@media only screen and (max-width: 767px) {
  .modal-container {
    width: 100%;
    margin: 0px auto;
    padding: 5px;
    z-index: 1000;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  .modal-mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.424);
    display: table;
    transition: opacity 0.3s ease;
    padding-top: 5%;
  }
  .btn-close {
    height: 40px;
    width: 40px;
    background-color: rgb(255, 0, 51);
    border-radius: 50em;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
  }
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

/*-----------------------------------
default design
------------------------------------*/

/*-----------------------------------
vue animation
------------------------------------*/
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
/* Enter and leave animations can use different */
/* durations and timing functions.*/
.fade-enter-active {
  transition: all 0.2s ease;
}
.fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
.slide-enter.enter,
.slide-leave-active {
  transition: all 0.2s ease;
}
.slideback-leave-active,
.sldeback-enter-active {
  transition: all 0.2s ease;
}
.slideback-enter {
  transform: translate(-100%, 0);
}
.slideback-leave-to {
  transform: translate(100%, 0);
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
