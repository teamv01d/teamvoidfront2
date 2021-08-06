<template>
  <div>
    <app-navbar />
    <div class="ma-8 mr-16 ml-16">
      <v-container fluid>
        <v-row justify="center">
          <v-expansion-panels popout>
            <v-expansion-panel
              v-for="(userInfo, i) in userInfo"
              :key="i"
              hide-actions
            >
              <v-expansion-panel-header>
                <v-row align="center" class="spacer" no-gutters>
                  <v-col cols="4" sm="2" md="1">
                    <v-avatar size="52px">
                      <img
                        v-if="userInfo.avatar"
                        alt="Avatar"
                        src="../assets/void-logo.png"
                      />
                    </v-avatar>
                  </v-col>

                  <v-col class="hidden-xs-only content-size" sm="5" md="3">
                    <strong v-html="userInfo.name"></strong>
                  </v-col>

                  <v-col
                    v-if="userInfo.info"
                    class="grey--text text-truncate hidden-sm-and-down"
                  >
                    &mdash;
                    {{ userInfo.info }}
                  </v-col>
                  <v-col class="text-no-wrap content-size" cols="5" sm="3">
                    <v-chip
                      class="ml-0 mr-2 black--text content-size"
                      label
                      bold
                      big
                    >
                      {{ userInfo.testPoint }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-card-text>
                  <div>
                    <v-row align="center" class="spacer" no-gutters>
                      <p>Doğum Tarihi:</p>
                    </v-row>
                    <p>Yaşadığı Şehir:</p>
                    <p>Telefon No:</p>
                    <p>E posta adresi:</p>
                    <p>Okuduğu Üniversite:</p>
                    <p>Bölüm:</p>
                    <p>Hakkında:</p>
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

export default {
  components: {
    appFooter: Footer,
    appNavbar: Navbar,
  },
  data: () => ({
    userInfo: [
      {
        avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
        name: "Damla Dalgıç",
        testPoint: "80/100",
        info: "Sınav çözüldü....",
      },
    ],
  }),
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