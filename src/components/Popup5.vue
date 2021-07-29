<template>
  
    <v-dialog class=""  v-model="dialog"  width="600">
        
      <template v-slot:activator="{ on }">
        <v-btn  width="400px" class="deep-purple darken-3" dark v-on="on">Bilgileri Düzenle</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Bilgilerini Düzenle</v-card-title>
        <v-cart-text>
        </v-cart-text>
         <v-form class="mt-3 pa-3" ref="form">
              <label for=""> Kurum adını giriniz..</label>
            <v-text-field  label="Title" v-model="kurum"  >  </v-text-field>
            <label for=""> Web adresinizi giriniz..</label>
            <v-text-field placeholder="www.xxxx.com tipinde giriniz.." label="Title" v-model="web"  >
              
            </v-text-field>
             <label for=""> Hakkımızda bölümünü giriniz..</label>
             <v-textarea v-model="aboutus">
             </v-textarea>
           
            <v-btn right dark flat class="deep-purple darken-3"  @click="submit">Kaydet</v-btn>
           
        </v-form>
      
      
      
      </v-card>
    </v-dialog>

</template>
<script>
export default {
    data(){
        return{
           kurum:'',
           web:'',
           aboutus:''

        }
    },
    methods:{
      submit(){
       
        

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