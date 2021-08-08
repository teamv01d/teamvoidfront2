<template>
    <v-dialog class=""  v-model="dialog"  width="600">
        
      <template v-slot:activator="{ on }">
           <v-btn  class=" mr-2 deep-purple darken-3" dark v-on="on"> CV Ekle &nbsp; <v-icon>folder</v-icon> </v-btn>
             </template>
          <v-card>
              <v-cart-text class="mt-15">
            <h2 class="text-center mb-5">CV Ekleyiniz.</h2>
            <h4>Cv'nizi png fortmatında yükleyiniz ! </h4>
                  <input type="file"  @change="upload($event)" id="file-input">

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

// import pdf from 'vue-pdf'

export default {
  components:{
    
  
  
  },
  data(){
      return{
        file:"",
        imageUrl:""
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

    this.$axios.post(endpoint.auth.upload, data, config).then(
      response => {
        console.log(response)
      }
    )
  }
  
    // handleFileUpload(){
    //   const file = this.$refs.file.files[0];
    //   this.file= file
    //  this.imageUrl = URL.createObjectURL(file)
    // //   console.log(this.post.imageUrl)
    //   },
    
  }
}
</script>

  
