<template>
    <v-dialog class=""  v-model="dialog"  width="600">
        
      <template v-slot:activator="{ on }">
           <v-btn  class="  deep-purple darken-3" dark v-on="on"> Fotoğraf Ekle <v-icon>photo_camera</v-icon> </v-btn>
             </template>
          <v-card>
              <v-cart-text class="mt-15">
            <h2 class="ml-10 ">Fotoğraf Ekleyiniz.</h2>
              <imageInput v-model="photo"
              
              uploadIcon='mdi-upload' 


            
              />
              <v-btn dark class="deep-purple darken-3" @click="kaydet" >Kaydet</v-btn>
      </v-cart-text>   
          </v-card>
        
 </v-dialog>   
</template>
<script>
import imageInput from 'vuetify-image-input/a-la-carte'
import endpoint from "@/lib/api";
export default {
  components:{
   
    imageInput,
  
  },
  data(){
      return{
        photo:""
      }
     
  },
  methods:{
    kaydet() {
          
        this.$axios.post(endpoint.auth.photo,{
        ...this.photo,  token:localStorage.getItem("token")})
       .then(response =>{
        let urlinfo=response.data;
        this.$axios.post(endpoint.auth.profile,{
        urlinfo,token:localStorage.getItem("token")
        })
       .then(response =>{
         console.log(response.data)
         
      
       })
 
       })
       
    //    this.$axios.get(endpoint.auth.profile.replace('{id}','610ceb4ddf302b41e05e1b44'))
    //    .then(response =>{
    //      let photo1=response.data;
    //      this.photo=photo1
         
      
    //    })




    }
    
  }
}
</script>

  
