<template>
  <div>
    <x-slider />

    <s-events />
    <s-citation />
    <s-exhortation />
    <s-book />
    <s-jeu />
    <s-formation />
    <x-footer />
    <div class="go-top">
      <i class="bx bx-chevron-up"></i>
    </div>
  </div>
</template>

<script>
import XSlider from "./layouts/slider_banner";

//sections
import SExhortation from "./sections/section_exhortation";
import SFormation from "./sections/section_formation";
import SEvents from "./sections/section_events";
import SBook from "./sections/section_book";
import SCitation from "./sections/section_citation";
import SJeu from "./sections/section_jeu";

export default {
  name: "index",
  components: {
    XSlider,
    //section
    SExhortation,
    SFormation,
    SEvents,
    SCitation,
    SBook,
    SJeu,
  },

  mounted() {
    this.$store.dispatch("scrollToTop");
  },
};
</script>
