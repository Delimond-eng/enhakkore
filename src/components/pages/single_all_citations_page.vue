<template>
  <div>
    <page-banner page-title="Citations" sub-title="citations" />

    <div class="blog-area pt-5 pb-100">
      <div class="container-fluid">
        <div class="section-title">
          <span></span>
          <h2>Toutes les citations</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
            nostrud exercitation ullamco.
          </p>
        </div>
        <div class="row justify-content-lg-start">
          <div
            class="col-lg-4 col-md-12"
            v-for="citation in allCitations"
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
                      <li><i class="bx bx-like"></i> {{ citation.likes }}</li>
                      <li><i class="bx bx-comment"></i>{{ citation.likes }}</li>
                    </ul>
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
  name: "Citation",
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("scrollToTop");
    this.$store.dispatch("viewSingleContents", "citations");
  },

  computed: {
    allCitations() {
      return this.$store.getters.getCitations;
    },
  },
};
</script>
