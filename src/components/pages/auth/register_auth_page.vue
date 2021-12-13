<template>
  <div>
    <div class="register-form">
      <h2>Créer un compte</h2>
      <div class="line"></div>
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control border-primary"
            placeholder="nom d'utilisateur"
          />
        </div>
        <div class="form-group">
          <input type="text" class="form-control border-primary" placeholder="Email" />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control border-primary"
            placeholder="n° téléphone"
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            class="form-control border-primary"
            placeholder="Mot de passe"
          />
        </div>

        <button
          type="submit"
          @click.prevent="$emit('register')"
          class="default-btn text-uppercase"
        >
          Créer
        </button>
        <br />
        <br />
        <p class="text-center">
          retour à la boite de
          <a
            href="javascript:void(0)"
            @click="$emit('hasLogin')"
            class="lost-your-password"
            style="font-weight: bold"
            >connexion !</a
          >
        </p>
      </form>
    </div>
  </div>
</template>
