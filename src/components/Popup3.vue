<template>
    <v-dialog class=""  v-model="dialog"  width="600">
        
      <template v-slot:activator="{ on }">
           <v-btn  class="  deep-purple darken-3" dark v-on="on"> Fotoğraf Ekle &nbsp; <v-icon>photo_camera</v-icon> </v-btn>
             </template>
          <v-card>
              <v-cart-text class="mt-15">
            <h2 class="ml-10 ">Fotoğraf Ekleyiniz.</h2>
              <!-- <imageInput v-model="photo"
              
              uploadIcon='mdi-upload' 


            
              /> -->
               <input type="file"  @change="upload($event)" id="file-input">

               <img  :src="this.photo" />
              <v-btn dark class="deep-purple darken-3" @click="kaydet" >Kaydet</v-btn>
      </v-cart-text>   
          </v-card>
        
 </v-dialog>   
</template>
<script>
// import imageInput from 'vuetify-image-input/a-la-carte'
import endpoint from "@/lib/api";
export default {
  components:{
   
    // imageInput,
  
  },
  data(){
      return{
        photo:'',
        image:'',
      }
     
  },
  methods:{
    // kaydet() {
      //  var formData = new FormData();
      //  console.log(this.photo)
      //   formData.append("file",this.photo);
      //   // formData.append("cv", fileInputElement.files[0]);

      //   this.$axios.patch(endpoint.auth.update,
      //   formData)
      //  .then(response =>{
      //    console.log(response)
      //  })
       
 
    
       
    //    this.$axios.get(endpoint.auth.profile.replace('{id}','610ceb4ddf302b41e05e1b44'))
    //    .then(response =>{
    //      let photo1=response.data;
    //      this.photo=photo1
         
      
    //    })
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