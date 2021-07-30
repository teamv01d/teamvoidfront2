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
            <v-text-field v-model="post.kurum" label="Title"   >  </v-text-field>
            <label for=""> Web adresinizi giriniz..</label>
            <v-text-field placeholder="www.xxxx.com tipinde giriniz.." label="Title" v-model="post.web"  >
              
            </v-text-field>
             <label for=""> Hakkımızda bölümünü giriniz..</label>
             <v-textarea v-model="post.aboutus">
             </v-textarea>
           
            <v-btn right dark flat class="deep-purple darken-3"  @click="submit">Kaydet</v-btn>
           
        </v-form>
      
      
      
      </v-card>
    </v-dialog>

</template>
<script>
import axios from 'axios';
export default {
  
    data(){
        return{
           post:{
             kurum:'',
             web:'',
             aboutus:''
           },

        }
    },
    methods:{
      submit(){
        
         axios.get("https://profile-67e3f-default-rtdb.firebaseio.com/posts.json")
        .then(response => {
         if(!response.data)
         {
        axios.post("https://profile-67e3f-default-rtdb.firebaseio.com/posts/.json",{...this.post})
       .then(response =>{
         console.log(response)
         this.post ={}
       })
         }
         else{
            axios.put("https://profile-67e3f-default-rtdb.firebaseio.com/posts/-Mfq_smqrYFXTiZ1forZ/.json",{...this.post})
        .then(response =>{
         console.log(response,"degistirildi")
         this.post ={}
       })
         }
         
        })
     




       .catch(e => console.log(e));
        

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