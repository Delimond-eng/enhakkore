<template>
  <div>
    <page-banner page-title="Nos Livres" sub-title="livres" />

    <div class="products-area pb-100 pt-100">
      <div class="container">
        <div class="section-title">
          <h2>Tous nos livres</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
            nostrud exercitation ullamco.
          </p>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6" v-for="book in books" :key="book.livre_id">
            <div class="single-products">
              <div class="products-image">
                <a href="products-details.html"><img :src="book.media" alt="image" /></a>
              </div>
              <div class="products-content">
                <h3>
                  <a href="products-details.html">{{ book.titre }}</a>
                </h3>
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
  name: "LivresAll",
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("scrollToTop");
    this.$store.dispatch("viewSingleContents", "livres");
  },

  computed: {
    books() {
      return this.$store.getters.getLivres;
    },
  },
};
</script>
