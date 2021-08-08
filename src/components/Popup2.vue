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
             
           
            <v-btn right dark flat class="deep-purple darken-3"  @click="submit">Kaydet</v-btn>
           
        </v-form>
      
      
      
      </v-card>
    </v-dialog>

</template>
<script>
import endpoint from "@/lib/api";
export default {
  
    data(){
        return{
           post:{
             kurum:'',
             web:'',
             aboutus:'',
             city:'',
             phone:'',
             
            

           },

        }
    },
    methods:{
      submit(){
        var formData = new FormData();
        formData.append("kurum",this.post.kurum);
        formData.append("web", this.post.web);
        formData.append("city", this.post.city);
        formData.append("phone", this.post.phone);
        formData.append("aboutus", this.post.aboutus);
        
        
           this.$axios.get(endpoint.auth.profile
           )
        .then(response => {
          console.log("basarili get")
         if(!response.data)
         {
        this.$axios.post(endpoint.auth.profile,formData)
       .then(response =>{
         console.log(response,"basarili post")
         this.post ={}
       })
         }
         else{
           this.$axios.patch(endpoint.auth.profile,formData)
        .then(response =>{
        console.log(response,"basarili patch")
         this.post ={}
       })
         }
         
        })
      
     
       .catch(e => console.log(e))
        

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