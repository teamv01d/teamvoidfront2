<template>
  <div>
    <v-card max-width="1500" class="background" elevation="10">
      <v-row>
        <v-col cols="2">
          <img src="../assets/void-logo.png" alt="" />
        </v-col>
        <v-col cols="1">
          <p>Firma adı</p>
          <p>İlan adı</p></v-col
        >
        <v-col cols="2">
          <p>: Aselsan</p>
          <p>: Yazılım Stajyeri</p></v-col
        >
        <v-col cols="1">
          <p>Test Konusu</p>
        </v-col>
        <v-col cols="2">
          <p>: Javascript</p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin: 0 auto;
}
.background {
  background-color: grey;
  padding-top: 20px;
  margin-top: 20px;
}
img {
  width: 150px;
  max-width: 100%;
  height: auto;
}
</style>