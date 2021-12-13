<template>
  <div>
    <div class="blog-area pt-100 pb-100">
      <div class="container">
        <div class="section-title">
          <span>Citations</span>
          <h2>Citations récentes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
            nostrud exercitation ullamco.
          </p>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-lg-6 col-md-12"
            v-for="citation in citations"
            :key="citation.citation_id"
          >
            <div class="single-side-blog">
              <div class="row">
                <div class="col-lg-6 col-md-12">
                  <div
                    class="blog-image"
                    :style="`background-image: url(${citation.media})`"
                  ></div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="blog-content">
                    <div class="blog-author align-items-center">
                      <span><a href="#">citation</a></span>
                    </div>
                    <h3>
                      <a href="blog-details.html">{{
                        citation.titre | sortlength(40, "...")
                      }}</a>
                    </h3>

                    <ul class="blog-box-footer d-flex align-items-center">
                      <li>
                        <a href="#" class="social"
                          ><i class="bx bx-like"></i> {{ citation.likes }}</a
                        >
                      </li>
                      <li>
                        <a class="social" href="#"
                          ><i class="bx bx-comment"></i>{{ citation.likes }}</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="view-all-btn">
          <a href="#" class="default-btn"
            ><i class="bx bx-chevron-right"></i> voir toutes les citations<span></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Citation",
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("viewContents");
  },

  computed: {
    citations() {
      return this.$store.getters.getCitations;
    },
  },
};
</script>
