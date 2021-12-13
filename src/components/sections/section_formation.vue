<template>
  <div>
    <div class="blog-area pt-100 pb-100">
      <div class="container">
        <div class="section-title">
          <span>formations</span>
          <h2>Formations bibliques</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
            nostrud exercitation ullamco.
          </p>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-lg-6 col-md-12"
            v-for="formation in formations"
            :key="formation.formation_id"
          >
            <div class="single-side-blog">
              <div class="row">
                <div class="col-lg-6 col-md-12">
                  <div
                    class="blog-image"
                    :style="`background-image: url(${formation.media})`"
                  >
                    <a href="http://"><div class="play-icon"></div></a>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="blog-content">
                    <div class="blog-author align-items-center">
                      <span><a href="#">formation</a></span>
                    </div>
                    <h3>
                      <a href="blog-details.html">{{
                        formation.titre | sortlength(40, "")
                      }}</a>
                    </h3>

                    <ul
                      class="blog-box-footer d-flex justify-content-between align-items-center"
                    ></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="view-all-btn">
          <a href="#" class="default-btn"
            ><i class="bx bx-chevron-right"></i> voir toutes les formations<span></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Formations",
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("viewContents");
  },

  computed: {
    formations() {
      return this.$store.getters.getFormations;
    },
  },
};
</script>
