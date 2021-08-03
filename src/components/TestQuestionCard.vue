<template>
  <div>
    <div>
      <p class="text-h6 r">Soru Sayısı: {{ questionList.length }}</p>
    </div>
    <v-card max-width="1500">
      <v-row>
        <v-col cols="7" offset="1">
          <v-card max-width="1200" tile>
            <v-window v-model="onboarding" reverse>
              <v-window-item v-for="data in questionList" :key="data">
                <v-card height="350" elevation="0" class="mt-8">
                  <div class="fill-height mt-16">
                    <p style="font-size: 2rem">
                      {{ data.question1 }}
                    </p>
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
                <v-item
                  v-for="data in questionList"
                  :key="data"
                  v-slot="{ active, toggle }"
                >
                  <v-btn :input-value="active" icon @click="toggle">
                    <v-icon>mdi-record</v-icon>
                  </v-btn>
                </v-item>
              </v-item-group>
              <v-btn @click="next" :disabled="clickable" v-model="terms">
                <v-icon x-large>mdi-arrow-right-thick</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-row rows="4" no-gutters>
            <section id="app" class="hero is-info is-fullheight is-bold">
              <div class="hero-body">
                <div class="container has-text-centered">
                  <div id="timer">
                    <span id="minutes">{{ minutes }}</span>
                    <span id="middle">:</span>
                    <span id="seconds">{{ seconds }}</span>
                  </div>
                </div>
              </div>
            </section>
          </v-row>
          <h3 class="mb-2">Cevaplar</h3>
          <v-container>
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
export default {
  data: () => {
    return {
      questionList: [],
      timer: null,
      totalTime: 25 * 60,
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

    /*starts the timer when the screen is load.*/
    this.timer = setInterval(() => this.countdown(), 1000);
  },
  methods: {
    padTime: function (time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function () {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer();
      }
    },

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

    /* creates a time picker that displays the exam time*/
    minutes: function () {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function () {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    },
  },
};
</script>

<style scoped>
div {
  margin: 0 auto;
}
.r {
  padding-left: 30px;
  margin: 0 auto;
  margin: 20px 200px 20px 200px;
  background-color: #c7c6c5;
  border: 2px solid #bdbcbb;
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