<template>
  <div>
    <div max-width="1500">
      <p class="text-h6 r">Soru: 8/10</p>
    </div>
    <v-card max-width="1500">
      <v-row>
        <v-col cols="8" offset="1">
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
                <v-col
                  ><v-btn color="#FFFFFF" elevation="0">
                    <v-icon x-large> mdi-arrow-left-thick </v-icon>
                  </v-btn></v-col
                >
                <v-col
                  ><v-btn color="#FFFFFF" elevation="0">
                    <v-icon x-large> mdi-arrow-right-thick </v-icon>
                  </v-btn></v-col
                >
              </v-row>
            </v-window-item>
          </v-window>
        </v-col>

        <v-col cols="2">
          <h3 class="mb-2">Cevaplar</h3>
          <v-row rows="8" no-gutters>
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
          <v-row ows="8" no-gutters>
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
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      step: 1,
    };
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
</style>