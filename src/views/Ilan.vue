<template>
  <div class="Container">
    <v-card
      max-height="650"
      :elevation="8"
      slot="cover"
      :loading="loading"
      class="mx-10 my-16 background-color"
      max-width="600"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        class="CompanyLogo"
        height="170"
        :src="ilan.companyID.photo"
      ></v-img>

      <v-card-title>{{ ilan.advertisement_name }}</v-card-title>

      <v-card-text>
        <div class="my-4 text-subtitle-1">
          <span class="location-icon"></span>
          İlan Başlangıç Tarihi: {{ ilan.start_date }} <br />
          İlan Bitiş Tarihi: {{ ilan.end_date }}
        </div>

        <v-col align="start" class="mx-0 CompanyName">
          <v-card-text>{{ ilan.companyID.company_name }}</v-card-text>
        </v-col>

        <div class="my-4 text-subtitle-1">
          <span class="material-icons location-icon"> room</span>
          {{ ilan.city }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn
          style="padding-top: 0px"
          color="deep-purple lighten-2"
          text
          @click="toStartTest()"
        >
          Başvuru Yap
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["ilan"],

  data() {
    return {
      loading: false,
    };
  },
  methods: {
    reserve(id) {
      this.$router.push({ name: "IlanDetail", params: { id: id } });
    },
    toStartTest() {
      this.$router.push("/application");
    },
  },
};
</script>

<style lang="scss" scoped>
.Container {
  .CompanyLogo {
    border-radius: 8px;
  }

  .background-color {
    background: linear-gradient(to top right, #d1d4d4 -22%, #f5f4f7 82%);
    padding: 10px;

    .material-icons {
      margin-top: 0px;
    }
    .CompanyName {
      margin-top: 0;
      height: 2px;
    }
  }
}
</style>