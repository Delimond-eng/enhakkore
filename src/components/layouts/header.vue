<template>
  <div>
    <div class="navbar-area" id="topBar">
      <div class="main-responsive-nav">
        <div class="container">
          <div class="main-responsive-menu">
            <div class="logo">
              <a href="" style="z-index: 1">
                <site-title />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="main-navbar">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <a href="">
              <site-title />
            </a>
            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto">
                <li class="nav-item active"><a href="" class="nav-link">Accueil</a></li>
                <li class="nav-item">
                  <router-link tag="a" :to="{ name: 'about' }" class="nav-link"
                    >A propos</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link tag="a" :to="{ name: 'events' }" class="nav-link"
                    >Events</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link tag="a" :to="{ name: 'citations' }" class="nav-link"
                    >Citations</router-link
                  >
                </li>

                <li class="nav-item">
                  <router-link tag="a" :to="{ name: 'exhortations' }" class="nav-link"
                    >Exhortations</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link tag="a" :to="{ name: 'formations' }" class="nav-link"
                    >Formations</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link tag="a" :to="{ name: 'livres' }" class="nav-link"
                    >Livres</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link tag="a" :to="{ name: 'jeux' }" class="nav-link"
                    >Jeux bibliques</router-link
                  >
                </li>

                <li class="nav-item">
                  <a href="#footer" class="nav-link">Contacts</a>
                </li>
              </ul>
              <div class="others-options float-end align-items-end">
                <div class="option-item">
                  <a href="#" class="default-btn" @click.prevent="showModal = true"
                    ><i class="bx bx-user"></i>Connexion<span></span
                  ></a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="others-option-for-responsive">
        <div class="container">
          <div class="dot-menu">
            <div class="inner">
              <a href="#" class="default-btn1" @click.prevent="showModal = true"
                ><i class="bx bx-user"></i> Connexion<span></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <login-box v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script>
export default {
  name: "header",

  data() {
    return {
      showModal: false,
    };
  },

  methods: {},
};
</script>
