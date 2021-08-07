<template>
  
    <v-dialog class=""  v-model="dialog"  width="600">
        
      <template v-slot:activator="{ on }">
        <v-btn  width="400px" class="deep-purple darken-3" dark v-on="on">Bilgileri Düzenle <v-icon class="ml-2" right>edit</v-icon></v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Bilgilerini Düzenle</v-card-title>
        <v-cart-text>
        </v-cart-text>
         <v-form class="mt-3 pa-3" ref="form">
              <label for="">1) Kurum adını giriniz..</label>
            <v-text-field v-model="post.kurum" label="Title"   >  </v-text-field>
            <label for=""> 2) Web adresinizi giriniz..</label>
            <v-text-field placeholder="www.xxxx.com tipinde giriniz.." label="Title" v-model="post.web"  >
              
            </v-text-field>
             <label for="">3) Hakkımızda bölümünü giriniz..</label>
             <v-textarea v-model="post.aboutus">
             </v-textarea>
              <label for=""> 4) Fotoğraf ekleyiniz..</label>
            <input type="file" accept="image/*"  @change="uploadImage()" />
           
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
             aboutus:'',
             imageUrl:null,
             foto:null,

           },

        }
    },
    methods:{
      submit(){
        var formData = new FormData();
        formData.append("kurum",this.post.kurum);
        formData.append("web", this.post.web);
        formData.append("aboutus", this.post.aboutus);
        formData.append("foto", this.post.foto);
        
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
      onChange(e) {
      const file1 = e.target.files[0]
      this.post.foto = file1
      this.post.imageUrl = URL.createObjectURL(file1)
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