<template>
  <div>
    <page-banner page-title="Formations" sub-title="formations" />

    <div class="blog-area pt-100 pb-100">
      <div class="container-fluid">
        <div class="section-title">
          <h2>Toutes les formations</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
            nostrud exercitation ullamco.
          </p>
        </div>
        <div class="row justify-content-lg-start">
          <div
            class="col-lg-4 col-md-12"
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
      </div>
    </div>

    <x-footer />
  </div>
</template>

<script>
export default {
  name: "Formations",
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("scrollToTop");
    this.$store.dispatch("viewSingleContents", "formations");
  },

  computed: {
    formations() {
      return this.$store.getters.getFormations;
    },
  },
};
</script>
