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
            <v-text-field v-model="post.company_name" label="Title"   >  </v-text-field>
            <label for=""> 2) Web adresinizi giriniz..</label>
            <v-text-field placeholder="www.xxxx.com tipinde giriniz.." label="Title" v-model="post.web_address"  >
              
            </v-text-field>
             <label for="">3) Hakkımızda bölümünü giriniz..</label>
             <v-textarea v-model="post.about">
             </v-textarea>
             <label for="">4) Şehir giriniz..</label>
             <v-text-field v-model="post.city">
             </v-text-field>
              <label for="">5) Telefon numarası giriniz..</label>
             <v-text-field v-model="post.phone">
             </v-text-field>
             <v-alert v-if="alert"
      dense
      outlined
      type="error"
    >
      Lütfen tüm bilgileri giriniz !
    </v-alert>
             
             
             
           
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
             company_name:'',
             web_address:'',
             about:'',
             city:'',
             phone:'',
           
             
            

           },
           alert:false

        }
    },
    methods:{
      submit(){
        if(this.post.city && this.post.company_name && this.web_address && this.phone && this.about)
        {
            var formData = new FormData();
        formData.append("company_name",this.post.company_name);
        formData.append("web_address", this.post.web_address);
        formData.append("city", this.post.city);
        formData.append("phone", this.post.phone);
        formData.append("about", this.post.about);
           this.$axios.patch(endpoint.auth.companyUpdate,
             formData
           
           )
        .then(response =>{
          console.log(this.web_address)
        console.log(response,"basarili patch")
        console.log()
         this.post ={}
       })
       
        }
           else{
        this.alert=true
      }
      
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