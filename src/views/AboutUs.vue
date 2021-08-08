<template>
  <div>
    <app-navbar />
     <v-parallax
height="900"
src="/public/background1.jpg"
>
      <Team />
      </v-parallax>
    <app-footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Team from "../components/Team";

export default {
  components: {
    Team,
    appFooter: Footer,
    appNavbar: Navbar,
  },
};
</script>

<style>
</style>