<template>

    <div class="profile pb-16">
        <Navbar/>
        <h1 class="text-center mt-10"><span>PROFILIM</span></h1>
        <v-container class="mt-10">
            <v-layout row justify-space-around class="mb-5"> 
                <v-flex v-for="user in user" :key="user.name"> 
                   <v-responsive>
                       <v-avatar size="150" class="grey lighten-2">
                           <img :src="user.avatar" alt="">
                       </v-avatar>
                   </v-responsive>
                </v-flex>
                 <v-flex md8  > 
                     <div class="user-info mt-10">
                         <h3 class="mb-3"> Ad-Soyad : {{postList.name}} {{postList.surname}}</h3>
                        
                     </div>
                  
                </v-flex>

            </v-layout>
           <hr>
          
           <v-layout row class="mt-10">
            <v-flex md3>
           
            <h2 class="my-5">Bilgilerim</h2>
            <h3> Doğum Tarihi : </h3> 
            <h3> Şehir : </h3> 
            <h3> Üniversite : </h3>
            <h3> Bölüm : </h3>
            <h3> Telefon Numarası :</h3>
            <h3>Mail Adresi: </h3>
             <h3> Hakkımda :</h3>
            <h3>CV : </h3>
           
            </v-flex>  
            <v-flex md5>
            <div v-for="postList in postList" :key="postList">
            <h2 class="my-5"> - </h2>
            <h3> {{postList.birthdate}}  </h3>
            <h3> {{postList.city}} </h3> 
            <h3> {{postList.university}} </h3>
            <h3> {{postList.faculty}} </h3>
            <h3> {{postList.phone}}</h3>
            <h3>{{postList.email}}</h3>
            <h3> {{postList.about}}</h3>
            <h3>{{postList.selectedFile}} </h3>
            </div>
            </v-flex>
            <v-flex md4>
              <h2 class="my-5">Bilgileri Düzenle <v-icon right>edit</v-icon> </h2> 
                <Popup1  />  <br> <br> 
             
            </v-flex>   
        
         </v-layout>
         

        </v-container>
         <Footer class="footer"  />
    </div>
   
</template>
<script>

import Popup1 from '../components/Popup1.vue'

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer'
import endpoint from "@/lib/api";

// import axios from 'axios'
export default {
    components:{
        Navbar,
        Popup1,
       
        Footer,
    },
   data() {
       return {
           chosenFile:null,
           postList:[
         
           ],
            user:[
               { user:'nisanur celik',avatar:'/nisanurcelik.jpg'}
           ],
           previews: [],
errorImage: "url of an image to use to indicate an error",
           
          
       }
   },
    mounted(){
      
    // axios.get("https://profile-67e3f-default-rtdb.firebaseio.com/posts.json")
       this.$axios.get(endpoint.auth.profile.replace('{id}','6107ae9e4d82ad3944416aae'))
        .then(response => {
             let data = response.data;
         
          for(let key in data){
            this.postList.push({ ...data[key], id : key })
          }
          console.log("deneme")
        })
        

        .catch(e =>console.log(e));

    
    

    
    },
    methods:{
        gor(){
            console.log(this.chosenFile)
        }
    }

   

}
</script>
<style scoped>
h3{
    margin-top:20px;
}
.profile{
    background-color:#EDE7F6;

}
.footer{    
    margin-bottom:-100px;
    margin-top:70px;
}

</style>                    