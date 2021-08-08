<template>
    <v-dialog class=""  v-model="dialog"  width="600">
        
      <template v-slot:activator="{ on }">
           <v-btn  class=" mr-2 deep-purple darken-3" dark v-on="on"> CV Ekle &nbsp; <v-icon>folder</v-icon> </v-btn>
             </template>
          <v-card>
              <v-cart-text class="mt-15">
            <h2 class="text-center mb-5">CV Ekleyiniz.</h2>
            <h4>Cv'nizi png fortmatında yükleyiniz ! </h4>
               <imageInput v-model="file"
              
              uploadIcon='mdi-upload' 


            
              />
              <!-- <v-file-input v-model="cv"
    accept="image/*"
    label="File input"
  ></v-file-input> -->
                <!-- <pdf :src="post.imageUrl">  </pdf> -->
              <v-btn dark class="deep-purple darken-3" @click="kaydet" >Kaydet</v-btn>
      </v-cart-text>   
          </v-card>
        
 </v-dialog>   
</template>
<script>
// import imageInput from 'vuetify-image-input/a-la-carte'
import endpoint from "@/lib/api";
import imageInput from 'vuetify-image-input/a-la-carte'
// import pdf from 'vue-pdf'

export default {
  components:{
    
     imageInput,
    // pdf,
  
  },
  data(){
      return{
        file:"",
        imageUrl:""
      }
     
  },
  methods:{
    kaydet() {
        var formData = new FormData();
        formData.append("file",this.file);
        // formData.append("cv", fileInputElement.files[0]);

        this.$axios.post(endpoint.auth.upload,
        formData)
       .then(response =>{
         console.log(response)
       })
       
       .catch(e => console.log(e))
 
  
       
    //    this.$axios.get(endpoint.auth.profile.replace('{id}','610ceb4ddf302b41e05e1b44'))
    //    .then(response =>{
    //      let photo1=response.data;
    //      this.photo=photo1
         
      
    //    })




    },
    // handleFileUpload(){
    //   const file = this.$refs.file.files[0];
    //   this.file= file
    //  this.imageUrl = URL.createObjectURL(file)
    // //   console.log(this.post.imageUrl)
    //   },
    
  }
}
</script>

  
