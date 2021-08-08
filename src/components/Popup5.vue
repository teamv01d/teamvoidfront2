<template>
    <v-dialog class=""  v-model="dialog" height="700" width="600">
        
      <template v-slot:activator="{ on }">
           <v-btn  class="  deep-purple darken-3" dark v-on="on"> Fotoğraf Ekle <v-icon>photo_camera</v-icon> </v-btn>
             </template>
          <v-card>
              <v-cart-text class="mt-15">
            <h2 >Fotoğraf Ekleyiniz.</h2> 
              
               <input type="file"  @change="upload($event)" id="file-input">
               <br> <br>
              <v-btn dark class="btn-right deep-purple darken-3" @click="kaydet" >Kaydet</v-btn>
      </v-cart-text>   
          </v-card>
        
 </v-dialog>   
</template>
<script>
import endpoint from "@/lib/api";
export default {
  components:{
   
  
  
  },
  data(){
      return{
        photo:""
      }
     
  },
  methods:{
    upload(event){
    let data = new FormData();
    let file = event.target.files[0];

    data.append('name', 'my-file')
    data.append('file', file)

    let config = {
      header : {
       'Content-Type' : 'multipart/form-data'
     }
    }

    this.$axios.post(endpoint.auth.photo, data, config).then(
      response => {
        console.log(response)
      }
    )
  }
}
}
</script>
<style scoped>
.btn-right{
  float: right;
}
</style>
  
