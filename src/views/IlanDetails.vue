<template>
  <div>
    <Navbar />
    <div>
      <v-container> </v-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>