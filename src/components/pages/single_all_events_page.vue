<template>
  <div>
    <page-banner page-title="Nos Evénements" sub-title="événements" />

    <div class="events-schedules-area bg-light pt-5 pb-100">
      <div class="container">
        <div class="section-title">
          <span></span>
          <h2>Tous les Evénements</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
            nostrud exercitation ullamco.
          </p>
        </div>
        <div class="row justify-content-lg-start">
          <div
            class="col-lg-4 col-md-6"
            v-for="event in evenements"
            :key="event.evenement_id"
          >
            <div class="single-events-schedules">
              <div class="events-image">
                <a href="events-details.html"><img :src="event.media" alt="image" /></a>
              </div>
              <div class="events-content">
                <span><i class="bx bx-calendar"></i> {{ event.date_evenement }}</span>
                <h3>
                  <a href="events-details.html">{{
                    event.titre | sortlength(55, "...")
                  }}</a>
                </h3>

                <div class="bottom-content">
                  <div class="book-btn">
                    <a href="contact.html" class="book-btn-one"> Enrengistrez-vous</a>
                  </div>
                  <br /><br />
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
  name: "EventsALl",

  mounted() {
    this.$store.dispatch("scrollToTop");
    this.$store.dispatch("viewSingleContents", "evenements");
  },

  computed: {
    evenements() {
      return this.$store.getters.getEvents;
    },
  },
};
</script>
