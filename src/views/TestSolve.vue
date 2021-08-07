<template>
  <div>
    <app-test-info-card />
    <app-test-question-card />
  </div>
</template>

<script>
import TestInfoCard from "../components/TestInfoCard.vue";
import TestQuestionCard from "../components/TestQuestionCard.vue";

export default {
  components: {
    appTestInfoCard: TestInfoCard,
    appTestQuestionCard: TestQuestionCard,
  },
};
</script>

<style>
</style>