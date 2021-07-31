<template>
  <div>
    <div>
      <p class="text-h6 r">Soru: 8/10</p>
    </div>
    <v-card max-width="1500">
      <v-row>
        <v-col cols="7" offset="1">
          <v-window v-model="step">
            <v-window-item :value="1">
              <P
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                pariatur dicta fugiat distinctio facilis repellendus nobis
                corporis. Molestiae optio ad, ullam dolor dolorem ab laborum
                dolore numquam enim sint tempora! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Amet pariatur dicta fugiat
                distinctio facilis repellendus nobis corporis. Molestiae optio
                ad, ullam dolor dolorem ab laborum dolore numquam enim sint
                tempora!</P
              >
              <v-divider></v-divider>
              <div class="mt-6 mb-10">
                <v-checkbox :label="`Cevap cevap`"></v-checkbox>
                <v-checkbox :label="`Cevap cevap`"></v-checkbox>
                <v-checkbox :label="`Cevap cevap`"></v-checkbox>
                <v-checkbox :label="`Cevap cevap`"></v-checkbox>
              </div>

              <v-row>
                <v-col cols="2"
                  ><v-btn color="#FFFFFF" elevation="0">
                    <v-icon x-large> mdi-arrow-left-thick </v-icon>
                  </v-btn></v-col
                >

                <v-col cols="2"
                  ><v-btn color="#FFFFFF" elevation="0">
                    <v-icon x-large> mdi-arrow-right-thick </v-icon>
                  </v-btn></v-col
                >
              </v-row>
            </v-window-item>
          </v-window>
        </v-col>

        <v-col cols="3">
          <h3 class="mb-2">Cevaplar</h3>
          <v-row rows="4" no-gutters>
            <v-col cols="2">
              <p class="question-box">A</p>
            </v-col>
            <v-col cols="2">
              <p class="question-box">A</p>
            </v-col>
            <v-col cols="2">
              <p class="question-box">A</p>
            </v-col>
            <v-col cols="2">
              <p class="question-box">A</p>
            </v-col>
          </v-row>
          <v-row rows="4" no-gutters>
            <v-col cols="2">
              <p class="question-box">A</p>
            </v-col>
            <v-col cols="2">
              <p class="question-box">A</p>
            </v-col>
            <v-col cols="2">
              <p class="question-box">A</p>
            </v-col>
            <v-col cols="2">
              <p class="question-box">A</p>
            </v-col>
          </v-row>
          <v-row rows="4" no-gutters>
            <section id="app" class="hero is-info is-fullheight is-bold">
              <div class="hero-body">
                <div class="container has-text-centered">
                  <h2 class="title is-6">{{ title }}</h2>

                  <div id="timer">
                    <span id="minutes">{{ minutes }}</span>
                    <span id="middle">:</span>
                    <span id="seconds">{{ seconds }}</span>
                  </div>

                  <div id="buttons">
                    <button
                      id="start"
                      class="button is-dark is-large"
                      v-if="!timer"
                      @click="startTimer"
                    >
                      <i class="far fa-play-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      timer: null,
      totalTime: 25 * 60,
      resetButton: false,
    };
  },
  methods: {
    startTimer: function () {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },

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
  },

  computed: {
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