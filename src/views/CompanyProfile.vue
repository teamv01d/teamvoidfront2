<template>
<div class="company">
    <CompanyNavbar />
     <h1  class="text-center mt-10 mb-15"><span>KURUM PROFİLİ</span></h1>
     
      
     <v-container class="mt-10 " >
            <v-layout>
               <v-spacer></v-spacer> <Popup />
            </v-layout>
                <v-layout row class="mt-10">
                  
                <v-flex xs2>
                <h2 class="mb-15 "> Kurum Adı: </h2>
                <h4  class="mb-4"> <v-icon> public</v-icon> Web Adresimiz:  </h4>
                <h4  class="mb-4"> <v-icon> email</v-icon> E-mail: </h4> 
               
              
               
               
                </v-flex> 
                <div v-for="postList in postList" :key="postList">
                <v-flex xs10> 
                
                <h2 class="mb-15"> {{postList.kurum}} </h2>
                <h4  class="mb-4">   {{postList.web}} </h4>
                <h4  class="mb-4"> </h4> 

               </v-flex>
              
               </div> 
              </v-layout>
               <div class="text-center"  v-for="postList in postList" :key="postList" >
                <h3 class=" mt-16 mb-16 text-center ">HAKKIMIZDA </h3>   
                <p>{{postList.aboutus}}</p>
                 </div>
               
              
            <br> <br>
      
    
      
     </v-container> 
     
     
    <Footer />


</div>
    
</template>

<script>
import CompanyNavbar from '../components/CompanyNavbar.vue'
import Popup from '../components/Popup2.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'

export default {
   
   components:{
       CompanyNavbar,
       Popup,
       Footer :Footer,
   },
   data(){
       return{
           postList: []

           
       }
   },
   mounted(){
      
        axios.get("https://profile-67e3f-default-rtdb.firebaseio.com/posts.json")
        .then(response => {
             let data = response.data;
            
         
          for(let key in data){
            this.postList.push({ ...data[key], id : key })
          }
        })
        .catch(e =>console.log(e)) 
    }

   
 
 
}
</script>
<style scoped>
.company{
     background-color:#EDE7F6;
    
}
h1{
    font-size: 40px;
}
h2{
    font-size: 30px;
}
h3{
    font-size: 25px;
}

</style>