<template>
  
    <v-dialog class=""  v-model="dialog"  >
        
      <template v-slot:activator="{ on }">
        <v-btn  width="400px" class="deep-purple darken-3" dark v-on="on">Kişisel Bilgilerini Düzenle</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Kişisel Bilgilerini Düzenle</v-card-title>

      <v-cart-text>
        <v-form class="mt-3 pa-3" ref="form">
            <label for=""> 1) Doğum tarihini giriniz..</label>
            <span></span>
            <v-text-field placeholder="xx/xx/xxxx formatında giriniz.." label="Title" v-model="post.birthdate"  >
              
            </v-text-field>
             <label for=""> 2) Yaşadığınız şehri giriniz..</label>
            <v-text-field label="Title" v-model="post.city"  > </v-text-field>
            
             <label for=""> 3) Üniversitenizi giriniz..</label>
            <span></span>
            <v-text-field label="Title" v-model="post.university"  >
              
            </v-text-field>
            <label for=""> 4) Bölümünüzü giriniz..</label>
            <v-text-field label="Title" v-model="post.faculty"  > </v-text-field>
           
              <label for=""> 5) Telefon numaranızı giriniz..</label>
            <span></span>
            <v-text-field label="Title" v-model="post.phone"  >
              
            </v-text-field>
             <label for=""> 6)Kendinizi kısaca anlatınız..</label>
            <v-textarea label="Title" v-model="post.about"  >
              
            </v-textarea>
              <label for=""> 7) CV ekleyiniz..</label>
            <input type="file" accept="application/pdf" id="file" ref="file" v-on:change="handleFileUpload()"/>
            <!-- <img :src="post.imageUrl" alt=""> -->
            <pdf :src="post.imageUrl">  </pdf>


            <v-btn right flat  dark class="deep-purple darken-3"  @click="submit">Kaydet</v-btn>
           
        </v-form>
      
       
        </v-cart-text>
     
      </v-card>
    </v-dialog>

</template>
<script>
import endpoint from "@/lib/api";
import pdf from 'vue-pdf'

export default {
  components:{
    pdf

  },
  data(){
    return{
      post:{ 
       birthdate:'',
       city:'',
       university:'',
      faculty:'',
      phone:'',
      about:'',
      cv:null,
      imageUrl: null
     

    }
     
    }
  },
  methods:{
     
   submit(){
        console.log(this.post.cv)
        var formData = new FormData();
        formData.append("birthdate",this.post.birthdate);
        formData.append("city", this.post.city);
        formData.append(" university", this.post. university);
        formData.append("faculty", this.post.faculty);
        formData.append("phone", this.post.phone);
        formData.append("about", this.post.about);
        formData.append('file', this.post.cv);
     


      
        // this.$axios.post(endpoint.auth.profile.replace('{id}','6107ae9e4d82ad3944416aae'),formData)
          this.$axios.get(endpoint.auth.profile.replace('{id}','6107ae9e4d82ad3944416aae'))
        .then(response => {
          console.log("basarili get")
         if(!response.data)
         {
        this.$axios.post(endpoint.auth.profile.replace('{id}','6107ae9e4d82ad3944416aae'),formData)
       .then(response =>{
         console.log(response,"basarili post")
         this.post ={}
       })
         }
         else{
           this.$axios.patch(endpoint.auth.profile.replace('{id}','6107ae9e4d82ad3944416aae'),formData)
        .then(response =>{
        console.log(response,"basarili patch")
         this.post ={}
       })
         }
         
        })
      
     
       .catch(e => console.log(e))
        

      },
      handleFileUpload(){
        const file = this.$refs.file.files[0];
      this.post.cv = file
      this.post.imageUrl = URL.createObjectURL(file)
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