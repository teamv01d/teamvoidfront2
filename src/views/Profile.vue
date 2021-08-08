<template>

    <div class="pb-16">
        <Navbar/>
        <h1 class="text-center mt-10"><span>PROFİLİM</span></h1>
        <v-container class="mt-10">
            <v-layout row justify-space-around class="mb-5"> 
                <v-flex > 
                   
                   <v-responsive>  
                       <v-avatar size="180" class="grey lighten-2">
                            <img :src="rsm" alt="">
                       </v-avatar>
                      <br> <br>
                         <Popup3 />
                         
                   </v-responsive>
                
                 
                </v-flex>
                 <v-flex md8  > 
                     <div class="user-info mt-10">
                         <h2 class="mb-3"> HOŞGELDİN  {{postList[0].name}} {{postList[0].surname}}! </h2>
                        
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
                      <h3>Doğum Tarihi : </h3>
                      </v-flex>
                <v-flex xs8>
                     <h3>{{p.birthdate}}</h3>
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
                     <h3>{{p.email}} </h3>
                </v-flex>    
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                      <h3>Hakkımda :</h3>
                      </v-flex>
                <v-flex xs8>
                    <h3> {{p.about}}</h3>
                </v-flex>    
                </v-layout> <br>
                 <v-layout  row>
                  <v-flex xs4>
                      <h3>CV :</h3>
                      </v-flex>
                <v-flex  xs8>
              <v-btn class="mt-5" @click="cvGor"> Cv Gor </v-btn> 
              <img v-if="check1" :src="p.cv" alt="">
    

                </v-flex>    
                </v-layout>

                
                    
            
           
            </v-flex>  
           
           
            <v-flex md4>
              <h2 class="my-5">Bilgileri Düzenle <v-icon right>edit</v-icon> </h2> 
                <Popup1  />  <br> <br> 
                <Popup4 />
             
            </v-flex>   
        
         </v-layout>
         

        </v-container>
         <Footer  />
    </div>
   
</template>
<script>

import Popup1 from '../components/Popup1.vue'

import Popup4 from '../components/Popup4.vue'
import Popup3 from '../components/Popup3.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer'
import endpoint from "@/lib/api";



export default {
    components:{
        Navbar,
        Popup1,
        Footer,
        Popup3,
        Popup4,
      
    },
   data() {
       return {
           chosenFile:null,
           postList:[
              
           ],
           check1:false,
        
        
          rsm:'/us2.png',
         
        
       
           
          
       }
   },
    mounted(){
    
       this.$axios.get(endpoint.auth.profile)
        .then(response => {
             let data = response.data;
             console.log(data)
             this.postList.push(data);
       
         this.rsm=this.postList[0].photo
        //  this.cvUrl=this.postList[0].cvUrl
         console.log(this.cvUrl)
        })
        

        .catch(e =>console.log(e));

    
    

    
    },
    methods:{
        gor(){
            console.log(this.chosenFile)
        },
        cvGor(){
            this.check1=!this.check1
        }

       
       
    }

   

}
</script>
<style scoped>
h3{
    margin-top:20px;
}


</style>                    