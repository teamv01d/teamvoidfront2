<template>
  <div>
    <v-card class="mt-16 mb-16" elevation="0">
      <v-row class="ma-6">
        <v-col cols="6">
          <v-card elevation="4">
            <v-window v-model="onboarding">
              <v-window-item v-for="(data, index) in questionList" :key="data">
                <v-card width="800" height="300" elevation="0" class="mt-8">
                  <div class="fill-height mt-16">
                    <span style="font-size: 1.8rem">
                      {{ index + 1 }}/{{ questionList.length }}:
                    </span>
                    <span style="font-size: 1.6rem">
                      {{ data.question }}
                    </span>
                    <v-divider></v-divider>
                    <div class="mt-6 mb-10">
                      <input
                        v-model="selectedAnswer"
                        class="mb-4"
                        type="radio"
                        id="a"
                        name="section_a"
                        :value="data.optionA"
                      />
                      <label for="html"> {{ data.optionA }}</label
                      ><br />
                      <input
                        v-model="selectedAnswer"
                        class="mb-4"
                        type="radio"
                        id="b"
                        name="section_b"
                        :value="data.optionB"
                      />
                      <label for="css"> {{ data.optionB }}</label
                      ><br />
                      <input
                        v-model="selectedAnswer"
                        class="mb-4"
                        type="radio"
                        id="c"
                        name="section_c"
                        :value="data.optionC"
                      />
                      <label for="css"> {{ data.optionC }}</label
                      ><br />
                      <input
                        v-model="selectedAnswer"
                        type="radio"
                        id="d"
                        name="section_d"
                        :value="data.optionD"
                      />
                      <label for="css"> {{ data.optionD }}</label
                      ><br />
                    </div>
                  </div>
                </v-card>
                <v-btn
                  @click="finishTest"
                  class="mt-8 mb-6"
                  type="submit"
                  color="#02c3bd"
                  dark
                  large
                >
                  SINAVI BİTİR</v-btn
                >
              </v-window-item>
            </v-window>
            <v-card-actions class="justify-space-between">
              <v-item-group v-model="onboarding" class="text-center" mandatory>
              </v-item-group>
              <v-btn @click="next(data)" :disabled="clickable" v-model="terms">
                <v-icon x-large>mdi-arrow-right-thick</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="2" offset="1">
          <v-row rows="2" offset="2" no-gutters> </v-row>
          <BaseTimer :time_limit="questionList.length * 60"></BaseTimer>
          <v-container>
            <h3 class="mb-2">Cevaplar</h3>
            <v-layout wrap>
              <v-flex v-for="(data, index) in questionList" :key="data">
                <v-btn
                  :color="data.solved ? '#02c3bd' : '#ffff'"
                  class="question-box ma-2"
                >
                  {{ index + 1 }}
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import endpoint from "@/lib/api";
import BaseTimer from "./BaseTimer.vue";
export default {
  components: {
    BaseTimer,
  },
  data: () => {
    return {
      questionList: [],
      selectedAnswer: "",
      terms: false,
      onboarding: 0,
      score: 0,
      data: [],
      currentQuestion: 0,
    };
  },
  created() {
    this.loadQuestions();
  },
  methods: {
    /* when the page starts the post request and gets the values into an array.*/
    async loadQuestions() {
      this.$axios
        .get(endpoint.auth.testSolve)
        .then((response) => {
          console.log(response);
          this.data = response.data;
          console.log(this.data);
          for (let key in this.data) {
            this.questionList.push({ ...this.data[key], id: key });
            console.log(key);
          }
        })
        .catch((e) => console.log(e));
    },
    /* runs the forward button of the window, checks the correct answers and calculates number of correct answers.*/
    next() {
      this.questionList[this.currentQuestion].solved = true;
      this.currentQuestion++;
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
      let i = 0;
      for (i = 0; i < this.data.length; i++) {
        if (this.selectedAnswer == this.data[i].answer) {
          this.score++;
        }
      }
    },
    /*posts the user's number of correct answers*/
    postCount() {
      const scorePoint = { count: this.score };
      this.$axios
        .post(endpoint.auth.postCount, {
          scorePoint,
          token: localStorage.getItem("token"),
        })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => console.log(e));
    },
    finishTest() {
      let i = 0;
      for (i = 0; i < this.data.length; i++) {
        if (this.selectedAnswer == this.data[i].answer) {
          this.score++;
        }
      }
      alert("Sınavınız bitmiştir.");
      this.postCount();
      this.$router.push("/company");
      console.log(this.score);
    },
  },
  computed: {
    /* when the questions are finished, it disables the v-window's button.*/
    clickable: function () {
      const length = this.questionList.length - 1;
      if (this.onboarding == length) {
        return !this.terms;
      }
      return this.terms;
    },
  },
};
</script>

<style scoped>
div {
  margin: 0 auto;
}
span {
  font-size: 32px;
}
.question-box {
  border: 2px solid #bdbcbb;
  text-align: center;
}
</style>