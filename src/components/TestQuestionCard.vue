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
                    <span style="font-size: 1.8rem"> {{ index + 1 }}.</span>
                    <span style="font-size: 1.6rem">
                      {{ data.question1 }}
                    </span>
                    <v-divider></v-divider>
                    <div class="mt-6 mb-10">
                      <input
                        v-model="selectedAnswer"
                        class="mb-4"
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label for="html"> HTML</label><br />
                      <input
                        v-model="selectedAnswer"
                        class="mb-4"
                        type="radio"
                        id="css"
                        name="css"
                        value="CSS"
                      />
                      <label for="css"> CSS</label><br />
                      <input
                        v-model="selectedAnswer"
                        class="mb-4"
                        type="radio"
                        id="javascript"
                        name="javascript"
                        value="javascript"
                      />
                      <label for="css"> JAVASCRIPT</label><br />
                      <input
                        v-model="selectedAnswer"
                        type="radio"
                        id="vue"
                        name="vue"
                        value="vue"
                      />
                      <label for="css"> VUE.JS</label><br />
                    </div>
                  </div>
                </v-card>
              </v-window-item>
            </v-window>
            <v-card-actions class="justify-space-between">
              <v-item-group v-model="onboarding" class="text-center" mandatory>
              </v-item-group>
              <v-btn @click="next" :disabled="clickable" v-model="terms">
                <v-icon x-large>mdi-arrow-right-thick</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-btn class="mt-8 mb-6" type="submit" color="#02c3bd" dark large>
            SINAVI BİTİR</v-btn
          >
        </v-col>
        <v-col cols="2" offset="1">
          <v-row rows="2" offset="2" no-gutters> </v-row>
          <BaseTimer :time_limit="questionList.length * 60"></BaseTimer>
          <v-container>
            <h3 class="mb-2">Cevaplar</h3>
            <v-layout wrap>
              <v-flex v-for="data in questionList" :key="data">
                <v-btn class="question-box ma-2"> A </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
//import endpoint from "@/lib/api";
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
    };
  },
  created() {
    /* when the page starts the post request and gets the values into an array.*/
    this.$axios
      .get("https://void-9c2d3-default-rtdb.firebaseio.com/posts.json")
      .then((response) => {
        console.log(response);
        let data = response.data;
        for (let key in data) {
          this.questionList.push({ ...data[key], id: key });
          console.log(key);
        }
      })
      .catch((e) => console.log(e));
    this.timer = setInterval(() => this.countdown(), 1000);
    /*starts the timer when the screen is load.*/
  },
  methods: {
    /* runs the forward button of the window.*/
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
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
.timePicker {
  text-align: center;
  border: 2px solid #d32f2f;
  background-color: #ef9a9a;
}
.infoPanel {
  padding-left: 30px;
  margin: 0 auto;
}
.question-box {
  border: 2px solid #bdbcbb;
  text-align: center;
}
#timer {
  font-size: 50px;
  line-height: 1;
  margin-bottom: 40px;
}
</style>