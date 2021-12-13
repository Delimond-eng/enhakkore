<template>
  <div>
    <footer class="footer-area pt-5" id="footer">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <div class="widget-logo">
                <a href="index-2.html">
                  <site-title></site-title>
                </a>
              </div>
              <p>
                Bienvenue ! La vie est un parcours que nous pouvons suivre ensemble !
                Découvrez une nouvelle voie pour votre vie. Nous sommes ici pour vous
                aider à trouver un sens aux questions difficiles de la vie. Vous pourrez
                rencontrer une personne qui peut tout changer – Jésus Christ –, découvrir
                des passages de la Parole de Dieu, la Bible, et vous connecter avec
                d’autres personnes qui découvrent ce même parcours. Nous espérons que vous
                reviendrez encore et encore !
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>Liens rapides</h3>
              <ul class="footer-links-list">
                <li><a href="">Accueil</a></li>
                <li class="">
                  <router-link tag="a" :to="{ name: 'about' }">A propos</router-link>
                </li>
                <li class="">
                  <router-link tag="a" :to="{ name: 'events' }">Events</router-link>
                </li>
                <li class="">
                  <router-link tag="a" :to="{ name: 'citations' }">Citations</router-link>
                </li>
                <li class="">
                  <router-link tag="a" :to="{ name: 'exhortations' }"
                    >Exhortations</router-link
                  >
                </li>
                <li class="">
                  <router-link tag="a" :to="{ name: 'formations' }"
                    >Formations</router-link
                  >
                </li>
                <li class="">
                  <router-link tag="a" :to="{ name: 'livres' }">livres</router-link>
                </li>
                <li class="">
                  <router-link tag="a" :to="{ name: 'jeux' }">Jeux bibliques</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>Suivez nous sur</h3>
              <ul class="footer-links-list">
                <li><a href="#" target="_blank">Facebook</a></li>
                <li>
                  <a href="#" target="_blank">Twitter</a>
                </li>
                <li>
                  <a href="#" target="_blank">Google +</a>
                </li>
                <li><a href="#" target="_blank">Youtube</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>Contact & adresse</h3>
              <ul class="widget-info">
                <li>
                  <i class="bx bxs-map"></i> A78, Inzia. Q.Matonge, C.Kalamu Kinshasa,
                  Ref.stade du 20 mai
                </li>
                <li>
                  <i class="bx bxs-phone"></i>
                  <a href="tel:0023567890">+00 234 567 890</a>
                </li>
                <li>
                  <i class="bx bx-envelope-open"></i>
                  <a href="#"><span>@enhakkoreministries.com</span></a>
                </li>
              </ul>
              <ul class="widget-social">
                <li>
                  <a href="https://twitter.com/?lang=en" target="_blank">
                    <i class="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i class="bx bxl-instagram-alt"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i class="bx bxl-google-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div class="copyright-area">
      <div class="container">
        <div class="copyright-area-content">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
              <p>
                Copyright © 2021
                <a href="https://envytheme.com/" target="_blank">rtgroup drc </a>
              </p>
            </div>
            <div class="col-lg-6 col-md-6">
              <ul>
                <li>
                  <a href="privacy-policy.html">Politique de confidentialité</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
