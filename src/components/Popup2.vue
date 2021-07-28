<template>
  
    <v-dialog class=""  v-model="dialog"  width="500">
        
      <template v-slot:activator="{ on }">
        <v-btn  width="400px" class="deep-purple darken-3 " dark v-on="on">Eğitim Bilgilerini Düzenle</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Eğitim Bilgilerini Düzenle</v-card-title>
      <v-cart-text>
        <v-form class="mt-3 pa-3" ref="form">
            <label for=""> 1) Üniversitenizi giriniz..</label>
            <span></span>
            <v-text-field label="Title" v-model="university"  >
              
            </v-text-field>
             <label for=""> 2) Bölümünüzü giriniz..</label>
            <v-text-field label="Title" v-model="department"  > </v-text-field>
            <v-btn right flat class="success " @click="submit">Kaydet</v-btn>
           
        </v-form>
        </v-cart-text>
      
      
      
      </v-card>
    </v-dialog>

</template>
<script>
export default {
    data()
{
  return{
    university:'',
    department:'',
  }
},
methods:{
  submit(){
     this.$emit("university",this.university);
     this.$emit("department",this.department)

  }
}
}
</script>
<style scoped>
label{
  font-weight: bold;
  font-size: 20px;
}
</style>