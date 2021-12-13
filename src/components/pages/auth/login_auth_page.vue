<template>
  <div>
    <x-loading v-if="isLoading" />
    <div class="login-form">
      <h2>Connexion</h2>
      <div class="line"></div>
      <form>
        <div class="form-group">
          <input
            type="text"
            v-model="identifiant"
            class="form-control border-primary"
            placeholder="Email ou n° de téléphone"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model="pass"
            class="form-control border-primary"
            placeholder="Mot de passe"
          />
        </div>

        <div class="row align-items-center">
          <div class="col-12">
            <a href="#" class="lost-your-password">Mot de passe oubié ?</a>
          </div>
        </div>
        <button
          type="submit"
          @click.prevent="loggedIn"
          class="default-btn text-uppercase"
        >
          Connecter <span></span>
        </button>
        <br />
        <br />
        <p class="text-center">
          Vous n'avez pas un compte ?
          <a
            href="javascript:void(0)"
            @click="$emit('hasRegister')"
            class="lost-your-password"
            style="font-weight: bold "
            >Créer un compte</a
          >
        </p>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginForm",

  data() {
    return {
      identifiant: "",
      pass: "",
      isLoading: false,
    };
  },

  methods: {
    loggedIn() {
      if (this.identifiant === "") {
        this.$swal({
          toast: true,
          showConfirmButton: false,
          position: "bottom-end",
          timer: 1000,
          timerProgressBar: true,
          icon: "warning",
          title: "veuillez entrez votre identifiant !",
        });
        return;
      }

      if (this.pass === "") {
        this.$swal({
          toast: true,
          showConfirmButton: false,
          position: "bottom-end",
          timer: 1000,
          timerProgressBar: true,
          icon: "warning",
          title: "veuillez entrez votre mot de pass !",
        });
        return;
      }
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;

        this.$swal("", "vous venez de vous connecter avec succè !", "success");
      }, 2000);
    },
  },
};
</script>
