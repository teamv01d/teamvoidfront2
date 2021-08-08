<template>
  <div>
    <app-navbar />
    <div>
      <h1 class="header-content">BAŞVURULARIM</h1>
    </div>
    <div class="ma-12 ml-16 mr-16">
      <v-expansion-panels class="mb-6">
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header disable-icon-rotate>
            <v-col cols="4" sm="2" md="1">
              <v-avatar size="80">
                <v-img
                  src="../assets/void-logo.png"
                  alt="user"
                  height="100%"
                  width="50"
                />
              </v-avatar>
            </v-col>
            <v-col class="ml-4 size-content"> İlan Adı </v-col>

            <template v-slot:actions>
              <v-icon color="green"> mdi-check </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
  data() {
    return {};
  },
};
</script>

<style scoped>
.header-content {
  text-align: center;
  margin-top: 25px;
  font-size: 28px;
}
.v-expansion-panel {
  max-width: 1000px;
}
.size-content {
  font-size: 18px;
}
</style>