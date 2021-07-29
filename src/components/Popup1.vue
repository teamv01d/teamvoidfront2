<template>
  
    <v-dialog class=""  v-model="dialog"  width="500">
        
      <template v-slot:activator="{ on }">
        <v-btn  width="400px" class="deep-purple darken-3" dark v-on="on">Kişisel Bilgilerini Düzenle</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Kişisel Bilgilerini Düzenle</v-card-title>

      <v-cart-text>
        <v-form class="mt-3 pa-3" ref="form">
            <label for=""> 1) Doğum tarihini giriniz..</label>
            <span></span>
            <v-text-field placeholder="xx/xx/xxxx formatında giriniz.." label="Title" v-model="birthday"  >
              
            </v-text-field>
             <label for=""> 2) Yaşadığınız şehri giriniz..</label>
            <v-text-field label="Title" v-model="city"  > </v-text-field>
             <label for=""> 3)Kendinizi kısaca anlatınız..</label>
            <v-textarea label="Title" v-model="yourself"  >
              
            </v-textarea>
            <v-btn right flat  dark class="deep-purple darken-3"  @click="submit">Kaydet</v-btn>
           
        </v-form>
        </v-cart-text>
     
      </v-card>
    </v-dialog>

</template>
<script>
export default {
  data(){
    return{
      birthday:'',
      city:'',
      yourself:'',
    }
  },
  methods:{
    submit(){
      this.$emit("birthday",this.birthday);
      this.$emit("city",this.city);
      this.$emit("yourself",this.yourself);

    },
  }
   
}
</script>
<style scoped>
label{
  font-weight: bold;
  font-size: 20px;
}
</style>