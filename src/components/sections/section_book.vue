<template>
  <div>
    <div class="products-area pb-100 pt-100">
      <div class="container">
        <div class="section-title">
          <span>Nos livres</span>
          <h2>Nos livres disponibles</h2>
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
        <div class="view-all-btn">
          <a href="#" class="default-btn"
            ><i class="bx bx-chevron-right"></i> voir plus des livres<span></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Livres",
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("viewContents");
  },

  computed: {
    books() {
      return this.$store.getters.getLivres;
    },
  },
};
</script>
