<template>
  <v-dialog class="" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn width="400px" class="deep-purple darken-3" dark v-on="on"
        >Kişisel Bilgilerini Düzenle</v-btn
      >
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title
        >Kişisel Bilgilerini Düzenle</v-card-title
      >

      <v-cart-text>
        <v-form class="mt-3 pa-3" ref="form">
          <label for="">
            1) Doğum tarihinizi seçiniz..
            <v-icon @click="dategor()">date_range</v-icon></label
          >
          <br />
          <v-date-picker
            v-if="date"
            v-model="post.birthdate"
            year-icon="date_range"
            prev-icon="mdi-skip-previous"
            next-icon="mdi-skip-next"
          ></v-date-picker>

          <br />
          <label for=""> 2) Yaşadığınız şehri giriniz..</label>
          <v-text-field label="Title" v-model="post.city"> </v-text-field>

          <label for=""> 3) Üniversitenizi giriniz..</label>
          <span></span>
          <v-text-field label="Title" v-model="post.university"> </v-text-field>
          <label for=""> 4) Bölümünüzü giriniz..</label>
          <v-text-field label="Title" v-model="post.faculty"> </v-text-field>

          <label for=""> 5) Telefon numaranızı giriniz..</label>
          <span></span>
          <v-text-field label="Title" v-model="post.phone"> </v-text-field>
          <label for=""> 6)Kendinizi kısaca anlatınız..</label>
          <v-textarea label="Title" v-model="post.about"> </v-textarea>

          <v-btn right flat dark class="deep-purple darken-3" @click="submit"
            >Kaydet</v-btn
          >
          <v-alert v-if="alert" dense outlined type="error">
            Lütfen tüm bilgileri giriniz !
          </v-alert>
        </v-form>
      </v-cart-text>
    </v-card>
  </v-dialog>
</template>
<script>
import endpoint from "@/lib/api";

export default {
  components: {},
  data() {
    return {
      post: {
        birthdate: "",
        city: "",
        university: "",
        faculty: "",
        phone: "",
        about: "",
      },
      alert: false,
      date: false,
    };
  },
  methods: {
    submit() {
      if (
        this.post.birthdate &&
        this.post.city &&
        this.post.university &&
        this.post.faculty &&
        this.post.phone &&
        this.post.about
      ) {
        var formData = new FormData();
        formData.append("birthdate", this.post.birthdate);
        formData.append("city", this.post.city);
        formData.append("university", this.post.university);
        formData.append("faculty", this.post.faculty);
        formData.append("phone", this.post.phone);
        formData.append("about", this.post.about);
        this.$axios
          .patch(endpoint.auth.update, formData)
          .then((response) => {
            console.log(response, "basarili patch");
            console.log();
            this.post = {};
          })

          .catch((e) => console.log(e));
      } else {
        this.alert = true;
      }

      // this.$axios.post(endpoint.auth.profile.replace('{id}','6107ae9e4d82ad3944416aae'),formData)
    },
    // handleFileUpload(){
    // const file = this.$refs.file.files[0];
    // this.post.cv = file
    // this.post.imageUrl = URL.createObjectURL(file)
    // console.log(this.post.imageUrl)
    // },

    dategor() {
      this.date = !this.date;
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  font-size: 20px;
}
</style>