<template>
  <div>
    <div class="events-schedules-area bg-light pt-5 pb-100">
      <div class="container">
        <div class="section-title">
          <span></span>
          <h2>Nos Evénements</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis
            nostrud exercitation ullamco.
          </p>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-lg-4 col-md-6"
            v-for="event in events"
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
        <div class="view-all-btn">
          <router-link :to="{ name: 'events' }" tag="a" class="default-btn"
            ><i class="bx bx-chevron-right"></i> Voir tous nos évènements<span></span
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("viewContents");
  },

  computed: {
    events() {
      return this.$store.getters.getEvents;
    },
  },
};
</script>
