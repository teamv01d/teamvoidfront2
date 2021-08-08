<template>
  <v-app>
    <v-content class="background-color">
      <v-container class="fill-height">
        <img src="../assets/void-logo.png" alt="" />

        <v-row align="center" justify="center">
          <v-col lg="4">
            <h3>VO1D</h3>
            <v-card class="text-center mt-6" shaped elevation="10">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <h2 class="text-center darken-3--text text--lighten-2 mt-6">
                    Kurumsal Giriş
                  </h2>
                  <v-card-text class="pa-12">
                    <v-form @submit.prevent="signin">
                      <v-text-field
                        v-model="user.email"
                        label="E-posta adresi"
                        name="Email"
                        prepend-inner-icon="email"
                        type="text"
                        color="black lighten-3"
                        outlined
                        class="rounded-0"
                      />
                      <v-text-field
                        v-model="user.password"
                        id="password"
                        label="Şifre"
                        name="password"
                        :type="showPassword ? 'text' : 'password'"
                        prepend-inner-icon="lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        color="black lighten-3"
                        outlined
                        class="rounded-0"
                      />
                      <v-btn
                        @click="signin"
                        type="submit"
                        class="rounded-0"
                        color="#02c3bd"
                        large
                        block
                        dark
                        >GİRİŞ YAP</v-btn
                      >
                      <br />
                    </v-form>
                    <div>
                      <v-btn
                        color="#02c3bd"
                        outlined
                        large
                        block
                        dark
                        @click="step++"
                      >
                        <v-icon dense left> mdi-account-key </v-icon>Kayıt Ol
                      </v-btn>
                    </div>
                  </v-card-text>
                  <div v-if="submitted" class="mt-4">
                    <h3>Giriş başarılı.</h3>
                  </div>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row>
                    <v-col>
                      <v-card-text class="black--text mt-18 pl-10 pr-10">
                        <v-card-text>
                          <h2
                            class="
                              text-center
                              black--text
                              text--lighten-2
                              mb-12
                            "
                          >
                            HESAP OLUŞTUR
                          </h2>

                          <v-form @submit.prevent="onSubmit">
                            <v-text-field
                              v-model="user.name"
                              label="Yetkili İsim"
                              name="Name"
                              prepend-inner-icon="person"
                              type="text"
                              color="black lighten-3"
                              outlined
                              class="rounded-0"
                            />
                            <v-text-field
                              v-model="user.surname"
                              label="Yetkili Soyisim"
                              name="SurName"
                              prepend-inner-icon="person"
                              type="text"
                              color="black lighten-3"
                              outlined
                              class="rounded-0"
                            />
                            <v-text-field
                              v-model="user.company_name"
                              label="Kurum İsim"
                              name="CompanyName"
                              prepend-inner-icon="mdi-home"
                              type="text"
                              color="black lighten-3"
                              outlined
                              class="rounded-0"
                            />
                            <v-text-field
                              v-model="user.email"
                              label="E-posta Adresi"
                              name="Email"
                              prepend-inner-icon="email"
                              type="text"
                              color="black lighten-3"
                              outlined
                              class="rounded-0"
                            />

                            <v-text-field
                              v-model="user.password"
                              id="password"
                              label="Şifre"
                              name="password"
                              prepend-inner-icon="lock"
                              :type="showPassword ? 'text' : 'password'"
                              :append-icon="
                                showPassword ? 'mdi-eye' : 'mdi-eye-off'
                              "
                              @click:append="showPassword = !showPassword"
                              color="black lighten-3"
                              outlined
                              class="rounded-0"
                            />

                            <v-card-actions>
                              <v-btn
                                color="#02c3bd"
                                rounded
                                outlined
                                dark
                                large
                                @click="step--"
                              >
                                <v-icon x-large dark left>
                                  mdi-arrow-left </v-icon
                                >BACK
                              </v-btn>
                              <v-spacer />
                              <v-btn type="submit" color="#02c3bd" dark large
                                >KAYIT OL</v-btn
                              >
                            </v-card-actions>
                            <div v-if="submitted" class="mt-4">
                              <h3>Kaydınız başarıyla gerçekleştirildi.</h3>
                            </div>
                          </v-form>
                        </v-card-text>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import endpoint from "@/lib/api";
export default {
  data: () => {
    return {
      user: {
        name: "",
        surname: "",
        company_name: "",
        password: "",
        email: "",
      },
      step: 1,
      showPassword: false,
      submitted: false,
    };
  },
  methods: {
    signin() {
      const data = {
        email: this.user.email,
        password: this.user.password,
      };
      this.$axios
        .post(endpoint.auth.login, data)
        .then((response) => {
          localStorage.setItem("token", response.data.access_token);
          this.$axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.access_token;
          this.submitted = "true";
          this.$router.push("/company/profile");
        })
        .catch((e) => console.log(e));
    },

    onSubmit() {
      this.$axios
        .post(endpoint.auth.companyRegister, {
          ...this.user,
          token: localStorage.getItem("token"),
        })
        .then((response) => {
          console.log(response);
          this.user = {};
          this.submitted = "true";
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
.background-color {
  background: linear-gradient(to top right, #02c3bd -22%, #533a71 82%);
}
img {
  width: 150px;
  max-width: 100%;
  height: auto;
}
a:hover {
  font-size: 18px;
}
p {
  font-size: 100px;
  font-weight: bold;
  color: white;
  font-family: "Mukta", sans-serif;
}
h1 {
  text-align: left;
  color: white;
  font-family: "Mukta", sans-serif;
  line-height: 60px;
  font-size: 50px;
}
h2 {
  font-size: 30px;
}
h3 {
  text-align: center;
  color: white;
  font-family: "Mukta", sans-serif;
  line-height: 60px;
  font-size: 50px;
}
</style>
