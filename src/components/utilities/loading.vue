<template>
  <div>
    <transition name="loading">
      <div class="modal-mask1">
        <div class="modal-wrapper1">
          <div class="modal-container1">
            <img src="assets/images/loading.gif" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style>
.modal-mask1 {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper1 {
  display: table-cell;
  vertical-align: middle;
}

.modal-container1 {
  width: 120px;
  height: 120px;
  margin: 0px auto;
  padding: 0;
  background-color: rgba(238, 238, 238, 0.698);
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

@media only screen and (max-width: 767px) {
  .modal-container1 {
    width: 90px;
    height: 90px;
    margin: 0px auto;
    padding: 0;
    background-color: rgba(238, 238, 238, 0.698);
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }
}

.modal-container1 img {
  border-radius: 5px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.loading-enter {
  opacity: 0;
}

.loading-leave-active {
  opacity: 0;
}

.loading-enter .modal-container1,
.loading-leave-active .modal-container1 {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
