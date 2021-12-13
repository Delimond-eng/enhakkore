<template>
  <div>
    <page-banner page-title="Jeux bibliques" sub-title="jeux" />

    <div class="faq-area pt-5 pb-5 bg-light">
      <div class="container">
        <div class="section-title">
          <h2>Tous nos jeux bibliques</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua quis ipsum suspendisse.
          </p>
        </div>
        <div class="faq-accordion">
          <div class="accordion" id="FaqAccordion">
            <div class="accordion-item mb-2" v-for="jeu in jeux" :key="jeu.jeu_id">
              <router-link
                :to="{ name: 'questions', params: { jeu: jeu } }"
                tag="button"
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse"
                aria-expanded="false"
                aria-controls="collapse1"
              >
                {{ jeu.titre }}
              </router-link>
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
  name: "JeuxAll",
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("scrollToTop");
    this.$store.dispatch("viewSingleContents", "jeux");
  },

  computed: {
    jeux() {
      return this.$store.getters.getJeux;
    },
  },
};
</script>
