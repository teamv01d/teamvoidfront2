<template>
  <nav>
    <v-toolbar class="renk" app height="90">
      <v-toolbar-title class="font-weight-bold white--text ml-3">
        <img class="mr-2 mt-5" height="50px" :src="avatar" alt="" />
        <p class="ml-1">V01D</p>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/company/profile" tag="v-btn">
        <v-btn color="white" class="mr-2 white" flat value="company">
          <span>Profil</span> <v-icon right>person</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/advertisement" tag="v-btn">
        <v-btn color="white" class="mr-2 white" flat value="profile">
          <span> İlan Ekle</span> <v-icon right>add</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/companyApplicants" tag="v-btn">
        <v-btn color="white" class="mr-2 white" flat value="profile">
          <span>Başvurular</span> <v-icon right>call_made</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/logout" tag="v-btn">
        <v-btn
          @click="clearToken()"
          color="white"
          class="mr-2 white"
          flat
          value="profile"
        >
          <span>Çıkış</span> <v-icon right>logout</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      avatar: "/mylogo.png",
    };
  },
  methods: {
    clearToken() {
      localStorage.clear();
      localStorage.removeItem("token");
      delete this.$axios.defaults.headers.common["Authorization"];
    },
  },
};
</script>
<style scoped>
.renk {
  background: linear-gradient(to top right, #02c3bd -22%, #533a71 82%);
}
.buton {
  background-color: #02c3bd;
}
</style>