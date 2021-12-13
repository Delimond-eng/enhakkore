<template>
  <div>
    <x-header></x-header>
    <router-view />
  </div>
</template>

<script>
import XHeader from "@/components/layouts/header";
export default {
  name: "App",
  components: {
    XHeader,
  },
};
</script>
