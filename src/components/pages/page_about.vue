<template>
  <div>
    <page-banner page-title="A propos de nous" sub-title="a-propos" />

    <div class="about-us-area pb-100 pt-100 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="about-us-image">
              <div class="image-two">
                <img src="assets/images/en/img-1.jpeg" alt="image" />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="about-us-content">
              <span>A propos</span>
              <h3>Mots de Bienvenu</h3>
              <p>
                Nous sommes convaincus au plus profond de notre cœur que votre présence
                ici n’est pas le fruit du hasard, mais le résultat de la volonté de Dieu.
                Le seigneur veut passer plus de temps avec vous et nous croyons que cela
                est aussi votre désir c’est pourquoi nous vous souhaitons le (la)
                Bienvenu(e) parmi nous.
              </p>
              <ul class="list">
                <li><i class="bx bx-check"></i> Ce que nous sommes !</li>
                <p>
                  EN-HAKKORE n’est ni une église, ni un parti politique. Nous sommes un
                  ministère de prières parce que nous croyons que la prière réussit
                  toujours là où les efforts humains ont échoués. Nous croyons fermement
                  que notre Dieu, le père de notre Seigneur Jésus Christ écoute et exauce
                  nos prières au nom de son fils. Nous avons reçu du seigneur le fardeau
                  de soutenir et d’accompagner le peuple de Dieu dans la prière afin que
                  celui-ci puisse obtenir de Dieu ce qui lui est dû « Matthieu 21 :22 »<br />
                </p>

                <li>
                  <i class="bx bx-check text-uppercase"></i> Pourquoi le Nom En-Hakkoré ?
                </li>
                <p>
                  De son origine hébraïque EN-HAKKORE veut dire la source de celui qui
                  invoque « Juges 15 : 18-19 ». La bible nous relate la prière d’un juge
                  du nom de Samson. Dans cette portion d’écriture, l’homme de Dieu invoque
                  le Seigneur parce qu’il avait soif à Léchi après une impressionnante
                  victoire face aux philistins. EN-HAKKORE parce que nous croyons que les
                  résultats de la prière durent dans le temps et que Dieu nous a dit dans
                  sa parole que quiconque invoquera le nom du seigneur sera sauvé « Actes
                  2 :21 »
                </p>
              </ul>
              <div class="about-btn mb-4">
                <a href="about.html" class="default-btn"
                  ><i class="bx bx-chevron-right"></i> voir plus de détail à propos
                  d'En-hakkoré <span style="top: 8.78334px; left: 197px"></span
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="benefits-area bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-sm-6">
            <div class="single-benefits">
              <h3>L’intercession pour la délivrance des familles</h3>
              <p>
                « Genèse 12 : 3b » Nous croyons que l’Eternel est un Dieu de famille. Le
                diable connaissant cela cherche toujours à détruire les familles. D’où
                nous avons le fardeau de prier avec : les familles dans le besoin, les
                couples fiancés, les couples qui attendent des enfants.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-benefits">
              <h3>Le temps de rafraîchissement</h3>
              <p>
                Des temps de prières collectifs, comme le déclare le seigneur Jésus dans
                l’évangile selon «Matthieu 18 : 19 -20 ». Des temps où nous sommes
                rafraichis et réanimé par la présence du seigneur.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-benefits">
              <h3>L’école de prière</h3>
              <p>
                « Luc 11 : 1 » Nous croyons que la prière peut s’apprendre aux travers de
                saintes écritures. Au travers de ce programme, nous avons pour mission de
                produire des guerriers de la prière.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-benefits">
              <h3>Sous le genêt</h3>
              <p>
                « 1Rois 19 :3-8 » la parole de Dieu nous donne la force de se lever et de
                continuer la marche. Au travers de ce programme, nous mettons à votre
                disposition une exhortation pour vous accompagner la semaine
              </p>
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
  name: "About",

  mounted() {
    this.$store.dispatch("scrollToTop");
  },
};
</script>
