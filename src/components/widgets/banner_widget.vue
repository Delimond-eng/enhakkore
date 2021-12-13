<template>
  <div>
    <div class="page-banner-area">
      <div class="container">
        <div class="page-banner-content">
          <h2>{{ pageTitle }}</h2>
          <ul class="pages-list">
            <li><a href="">Accueil</a></li>
            <li>Page</li>
            <li style="color: #0097ff; font-weight: bold">{{ subTitle }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  props: ["pageTitle", "subTitle"],
};
</script>
