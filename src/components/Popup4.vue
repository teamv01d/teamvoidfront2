<template>
  
    <v-dialog class=""  v-model="dialog"  width="600">
        
      <template v-slot:activator="{ on }">
        <v-btn  width="400px" class="deep-purple darken-3" dark v-on="on">İletişim Bilgilerini Düzenle</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>İletişim Bilgilerini Düzenle</v-card-title>
        <v-cart-text>
        </v-cart-text>
         <v-form class="mt-3 pa-3" ref="form">
            <label for=""> 1) Telefon numaranızı giriniz..</label>
            <span></span>
            <v-text-field label="Title" v-model="phone"  >
              
            </v-text-field>
           
            <v-btn right flat class="success " @click="submit">Kaydet</v-btn>
           
        </v-form>
      
      
      
      </v-card>
    </v-dialog>

</template>
<script>
export default {
    data(){
        return{
            phone:'',
            github:'',

        }
    },
    methods:{
      submit(){
        this.$emit("phone",this.phone);
        

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