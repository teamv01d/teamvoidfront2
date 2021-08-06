<template>
  <div>
    <app-navbar />
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
                    <v-avatar size="52px">
                      <img
                        v-if="avatar"
                        alt="Avatar"
                        src="../assets/void-logo.png"
                      />
                    </v-avatar>
                  </v-col>

                  <v-col class="hidden-xs-only content-size" sm="5" md="3">
                    <strong {{data.name}}></strong>
                    <strong {{data.surname}}></strong>
                  </v-col>

                  <v-col class="grey--text text-truncate hidden-sm-and-down">
                    &mdash;
                    {{ info }}
                  </v-col>
                  <v-col class="text-no-wrap content-size" cols="5" sm="3">
                    <v-chip
                      class="ml-0 mr-2 black--text content-size"
                      label
                      bold
                      big
                    >
                      {{ data.testPoint }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-card-text>
                  <div>
                    <p>Doğum Tarihi: {{ data.birthdate }}</p>
                    <p>Yaşadığı Şehir: {{ data.city }}</p>
                    <p>Telefon No: {{ data.phone }}</p>
                    <p>E posta adresi: {{ data.email }}</p>
                    <p>Okuduğu Üniversite: {{ data.university }}</p>
                    <p>Bölüm: {{ data.faculty }}</p>
                    <p>Hakkında: {{ data.about }}</p>
                    <v-btn
                      @click="finishTest"
                      type="submit"
                      color="#02c3bd"
                      dark
                      large
                    >
                      Özgeçmiş İndir</v-btn
                    >
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
import Navbar from "../components/Navbar.vue";

import endpoint from "@/lib/api";

export default {
  components: {
    appFooter: Footer,
    appNavbar: Navbar,
  },
  data: () => {
    return {
      applicantsList: [],
      avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
      info: "Sınav çözüldü....",
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
          console.log(response);
          this.data = response.data;
          console.log(this.data);
          for (let key in this.data) {
            this.applicantsList.push({ ...this.data[key], id: key });
            console.log(key);
          }
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style>
.content-size {
  font-size: 20px;
}
p {
  font-size: 17px;
  font-weight: size;
}
</style>