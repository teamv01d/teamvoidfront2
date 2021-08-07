<template>

    <div class="pb-16">
        <Navbar/>
        <h1 class="text-center mt-10"><span>PROFILIM</span></h1>
        <v-container class="mt-10">
            <v-layout row justify-space-around class="mb-5"> 
                <v-flex > 
                   
                   <v-responsive>
                       <v-avatar size="180" class="grey lighten-2">
                            <img :src="rsm" alt="">
                       </v-avatar>
                   </v-responsive>
                </v-flex>
                 <v-flex md8  > 
                     <div class="user-info mt-10">
                         <h2 class="mb-3"> HOŞGELDİN  {{postList.name}} {{postList.surname}}! </h2>
                        
                     </div>
                  
                </v-flex>

            </v-layout>
           <hr>
         
           <v-layout row class="mt-10">
            
            <v-flex  v-for="p in postList" :key="p" xs8>
                  <v-layout row>
                 <h2 >BİLGİLERİM </h2>
                   </v-layout>
                <v-layout row>
                  <v-flex xs4>
                      <h3> &nbsp; Doğum Tarihi : </h3>
                      </v-flex>
                <v-flex xs8>
                     <h3> &nbsp;{{p.birthdate}}</h3>
                </v-flex>    
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                       <h3>Şehir : </h3>
                      </v-flex>
                <v-flex xs8>
                     <h3>{{p.city}} </h3>
                </v-flex>    
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                       <h3>Üniversite : </h3>
                      </v-flex>
                <v-flex xs8>
                     <h3>{{p.university}} </h3>
                </v-flex>    
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                      <h3>Bölüm :</h3>
                      </v-flex>
                <v-flex xs8>
                     <h3>{{p.faculty}}</h3>
                </v-flex>    
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                     <h3>Telefon Numarası:</h3> 
                      </v-flex>
                <v-flex xs8>
                    <h3>{{p.phone}}</h3> 
                </v-flex>    
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                      <h3>Mail Adresi : </h3>
                      </v-flex>
                <v-flex xs8>
                     <h3>{{p.email}} sds</h3>
                </v-flex>    
                </v-layout>
                <v-layout row>
                  <v-flex xs5>
                      <h3>Hakkımda :</h3>
                      </v-flex>
                <v-flex xs7>
                    <h3>{{p.about}}</h3>
                </v-flex>    
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                      <h3>CV: </h3>
                      </v-flex>
                <v-flex xs8>
                     <h3>{{p.cv}} </h3>
                </v-flex>    
                </v-layout>

            
           
            </v-flex>  
           
           
            <v-flex md4>
              <h2 class="my-5">Bilgileri Düzenle <v-icon right>edit</v-icon> </h2> 
                <Popup1  />  <br> <br> 
             
            </v-flex>   
        
         </v-layout>
         

        </v-container>
         <Footer  />
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
        Footer
    },
   data() {
       return {
           chosenFile:null,
           postList:[
              
           ],
         
        
          rsm:'/us2.png',

       
           
          
       }
   },
    mounted(){
      
    // axios.get("https://profile-67e3f-default-rtdb.firebaseio.com/posts.json")
       this.$axios.get(endpoint.auth.profile.replace('{id}','610ceb4ddf302b41e05e1b44'))
        .then(response => {
             let data = response.data;
             console.log(data)
             this.postList.push(data);
         
        //   for(let key in data){
        //     this.postList.push({ ...data[key], id : key })
        //     console.log(key)
        //   }
          //console.log(this.postList)
         this.rsm=this.postList.foto
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


</style>                    