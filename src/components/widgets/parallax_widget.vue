<template>
  <div>
    <div class="overview-area ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-12">
            <div class="overview-content">
              <span>{{ subtitle }}</span>
              <h3>{{ bigTitle }}</h3>
              <p>« … {{ desc }} »</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "parallax",
  props: ["subtitle", "bigTitle", "desc"],
};
</script>
