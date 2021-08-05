<template>
  <div>
    <app-navbar />
    <app-test-question-card />
    <app-footer />
  </div>
</template>

<script>
import TestQuestionCard from "../components/TestQuestionCard.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    appTestQuestionCard: TestQuestionCard,
    appFooter: Footer,
    appNavbar: Navbar,
  },
};
</script>

<style>
</style>