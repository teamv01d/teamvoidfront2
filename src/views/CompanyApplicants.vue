<template>
  <div>
    <app-company-navbar />
    <div class="ma-8 mr-16 ml-16">
      <v-container fluid>
        <v-row justify="center">
          <v-expansion-panels popout>
            <v-expansion-panel
              v-for="data in applicantsList"
              :key="data"
              hide-actions
            >
              <v-expansion-panel-header>
                <v-row align="center" class="spacer" no-gutters>
                  <v-col cols="4" sm="2" md="1">
                    <v-avatar size="80">
                      <li v-for="item in data.usersProfile" :key="item">
                        <v-img
                          :src="item.photo"
                          alt="user"
                          height="100%"
                          width="100"
                        />
                      </li>
                    </v-avatar>
                  </v-col>

                  <v-col class="hidden-xs-only content-size" sm="5" md="3">
                    <li v-for="item in data.usersProfile" :key="item">
                      {{ item.name }} {{ item.surname }}
                    </li>
                  </v-col>

                  <v-col
                    v-if="data.score"
                    class="
                      grey--text
                      text-truncate
                      hidden-sm-and-down
                      content-size
                    "
                  >
                    &mdash;
                    {{ solvedInfo }}
                  </v-col>
                  <v-col
                    v-if="!data.score"
                    class="
                      grey--text
                      text-truncate
                      hidden-sm-and-down
                      content-size
                    "
                  >
                    &mdash;
                    {{ unsolvedInfo }}
                  </v-col>
                  <v-col class="text-no-wrap content-size" cols="5" sm="3">
                    <v-chip
                      class="ml-0 mr-2 black--text content-size"
                      label
                      bold
                      big
                    >
                      {{ data.score }}/100
                    </v-chip>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-card-text>
                  <div>
                    <li v-for="item in data.usersProfile" :key="item">
                      <p><u>Doğum Tarihi:</u> {{ item.birthdate }}</p>
                      <p><u>Yaşadığı Şehir:</u> {{ item.city }}</p>
                      <p><u>Telefon No:</u> {{ item.phone }}</p>
                      <p><u>E posta adresi:</u> {{ item.email }}</p>
                      <p>
                        <u> Okuduğu Üniversite:</u>
                        {{ item.university }}
                      </p>
                      <p><u>Bölüm:</u> {{ item.faculty }}</p>
                      <p><u>Hakkında:</u> {{ item.about }}</p>

                      <v-btn
                        color="#02c3bd"
                        dark
                        large
                        @click="openCV(item.cvUrl)"
                        >ÖZGEÇMİŞ İNDİR</v-btn
                      >
                    </li>
                  </div>
                </v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
    </div>
    <app-footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import endpoint from "@/lib/api";
import CompanyNavbar from "../components/CompanyNavbar.vue";
export default {
  components: {
    appFooter: Footer,
    appCompanyNavbar: CompanyNavbar,
  },
  data: () => {
    return {
      applicantsList: [],
      solvedInfo: "Yetenek testi çözüldü....",
      unsolvedInfo: "Yetenek testi çözülmedi....",
      cvUrl: "",
    };
  },
  created() {
    this.loadApplicants();
  },
  methods: {
    async loadApplicants() {
      this.$axios
        .get(endpoint.auth.companyApplicants)
        .then((response) => {
          let data = response.data;
          console.log(data);
          for (let key in data) {
            this.applicantsList.push({ ...data[key], id: key });
            console.log(key);
          }
        })
        .catch((e) => console.log(e));
    },
    openCV(value) {
      window.open(value);
      console.log(value);
    },
  },
};
</script>

<style>
.content-size {
  font-size: 20px;
}
p {
  font-size: 18px;
}
</style>