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
            <v-text-field placeholder="xx/xx/xxxx formatında giriniz.." label="Title" v-model="post.birthday"  >
              
            </v-text-field>
             <label for=""> 2) Yaşadığınız şehri giriniz..</label>
            <v-text-field label="Title" v-model="post.city"  > </v-text-field>
            
             <label for=""> 3) Üniversitenizi giriniz..</label>
            <span></span>
            <v-text-field label="Title" v-model="post.university"  >
              
            </v-text-field>
            <label for=""> 4) Bölümünüzü giriniz..</label>
            <v-text-field label="Title" v-model="post.department"  > </v-text-field>
           
              <label for=""> 5) Telefon numaranızı giriniz..</label>
            <span></span>
            <v-text-field label="Title" v-model="post.phone"  >
              
            </v-text-field>
             <label for=""> 6)Kendinizi kısaca anlatınız..</label>
            <v-textarea label="Title" v-model="post.yourself"  >
              
            </v-textarea>
              <label for=""> 7) CV ekleyiniz..</label>
            <v-file-input v-model="post.selectedFile" @change="onFileSelected" />
            <v-btn right flat  dark class="deep-purple darken-3"  @click="submit">Kaydet</v-btn>
           
        </v-form>
        </v-cart-text>
     
      </v-card>
    </v-dialog>

</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      post:{ 
        birthday:'',
       city:'',
       university:'',
      department:'',
      phone:'',
      yourself:'',
      selectedFile:'null'

    }
     
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
        

      },
    
  }
   
}
</script>
<style scoped>
label{
  font-weight: bold;
  font-size: 20px;
}
</style>