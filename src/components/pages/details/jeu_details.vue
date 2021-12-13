<template>
  <div>
    <x-loading v-if="isLoading" />
    <site-parallax
      big-title="Jeu biblique"
      subtitle="jouez cette partie"
      desc="veuillez jouer à plus des jeux bibliques pour évaluer votre connaissance de la bible"
    />
    <div class="checkout-area pt-5 pb-5">
      <div class="container">
        <div class="user-actions">
          <i class="bx bx-check-circle"></i>
          <span>Veuillez repondre à cette question !</span>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="order-details">
              <h3 class="title">{{ jeu.titre }}</h3>
              <div class="payment-box">
                <div class="payment-method">
                  <h4>
                    {{ questions[index].question }}
                  </h4>
                  <div class="container">
                    <form>
                      <p
                        v-for="res in questions[index].reponses"
                        :key="res.jeu_question_reponse_id"
                      >
                        <input
                          type="radio"
                          :id="'check' + res.jeu_question_reponse_id"
                          name="radio-group"
                          @click="reponseId = res.jeu_question_reponse_id"
                        />
                        <label :for="'check' + res.jeu_question_reponse_id">{{
                          res.reponse
                        }}</label>
                      </p>
                    </form>
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  class="default-btn"
                  @click="play(questions[index].jeu_question_id)"
                  ><i class="bx bx-arrow-to-right"></i> suivant<span
                    style="top: -14.8px; left: 82.5px"
                  ></span
                ></a>
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
  name: "JeuDetails",

  data() {
    return {
      jeu: {},
      index: 0,
      questions: [],
      isLoading: false,
      reponseId: "",
      jeuPartieId: "",
    };
  },

  mounted() {
    this.$store.dispatch("scrollToTop");
    this.jeu = this.$route.params.jeu;
    this.questions = this.$route.params.jeu.questions;
    this.startGame();
  },

  methods: {
    play(qstionId) {
      if (this.jeuPartieId === "") {
        this.$swal("", "Vous devez seléctionner une reponse !", "warning");
        return;
      }
      if (this.jeuPartieId !== "") {
        let formData = new FormData();
        formData.append("jeu_partie_id", this.jeuPartieId);
        formData.append("jeu_question_id", qstionId);
        formData.append("jeu_question_reponse_id", this.reponseId);

        this.isLoading = true;
        console.log(qstionId);
        console.log(this.jeuPartieId);
        console.log(this.reponseId);

        this.$axios
          .post("/content/jeux/play", formData)
          .then((res) => {
            this.isLoading = false;
            let data = res.data.reponse;
            if (data.status === "success") {
              this.jeuPartieId = data.jeu_partie_play_id;
              let index = 0;
              for (let i = 0; i < this.questions.length; i++) {
                index = i;
              }
              if (this.index < index) {
                this.index++;
              } else {
                this.$swal("partie terminé", "votre score est 5 / 10 !", "success");
                setTimeout(() => {
                  this.$router.go(this.$router.push({ name: "home" }));
                }, 2000);
                return;
              }
            }
            console.log(JSON.stringify(data));
          })
          .catch((err) => {
            this.isLoading = false;
            console.log(err);
          });
      }
    },

    startGame() {
      if (this.jeuPartieId === "" && this.jeu.jeu_id !== "") {
        let formData = new FormData();
        formData.append("jeu_id", this.jeu.jeu_id);
        this.isLoading = true;
        this.$axios
          .post("/content/jeux/play", formData)
          .then((res) => {
            this.isLoading = false;
            console.log(JSON.stringify(res));
            let result = res.data.reponse;
            if (result.status === "success") {
              this.jeuPartieId = result.jeu_partie_id;
              this.$swal("", "Veuillez commencer une partie !", "info");
            }
          })
          .catch((err) => {
            this.isLoading = false;
            console.log(err);
          });
      }
    },
  },
};
</script>

<style>
/*-----------------------------------
default design
------------------------------------*/

/*-----------------------------------
vue animation
------------------------------------*/
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
/* Enter and leave animations can use different */
/* durations and timing functions.*/
.fade-enter-active {
  transition: all 0.2s ease;
}
.fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
.slide-enter.enter,
.slide-leave-active {
  transition: all 0.2s ease;
}
.slideback-leave-active,
.sldeback-enter-active {
  transition: all 0.2s ease;
}
.slideback-enter {
  transform: translate(-100%, 0);
}
.slideback-leave-to {
  transform: translate(100%, 0);
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
