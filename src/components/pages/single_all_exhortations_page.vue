<template>
  <div>
    <page-banner page-title="Exhortations" sub-title="exhortation" />

    <div class="blog-area bg-light pt-100 pb-100">
      <div class="container">
        <div class="section-title">
          <span>Exhortations</span>
          <h2>Nos Exhortations</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
            nostrud exercitation ullamco.
          </p>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-lg-4 col-md-6"
            v-for="exhortation in exhortations"
            :key="exhortation.exhortation_id"
          >
            <div class="single-blog">
              <div class="blog-image">
                <a href="blog-details.html">
                  <img :src="exhortation.media" alt="image" />
                </a>
              </div>
              <div class="blog-content">
                <div class="blog-author align-items-center">
                  <span><a href="#">Exhortation</a></span>
                </div>
                <h3>{{ exhortation.titre }}</h3>
                <p>
                  {{ exhortation.texte }}
                </p>
                <ul
                  class="blog-box-footer d-flex justify-content-between align-items-center"
                >
                  <li><i class="bx bx-calendar"></i> 21/08/2020</li>
                  <li>
                    <a href="#"><i class="bx bx-like"></i></a> {{ exhortation.likes }}
                  </li>
                  <li>
                    <a href="#"><i class="bx bx-comment"></i></a> {{ exhortation.likes }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="view-all-btn">
          <router-link tag="a" :to="{ name: 'exhortations' }" class="default-btn"
            ><i class="bx bx-chevron-right"></i> voir toutes les Exhortations<span></span
          ></router-link>
        </div>
      </div>
    </div>

    <x-footer />
  </div>
</template>

<script>
export default {
  name: "Exhortations",

  mounted() {
    this.$store.dispatch("scrollToTop");
    this.$store.dispatch("viewSingleContents", "exhortations");
  },

  computed: {
    evenements() {
      return this.$store.getters.getExhortations;
    },
  },
};
</script>
