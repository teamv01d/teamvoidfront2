<template>
<div >
    <CompanyNavbar />
     <h1  class="text-center mt-10 mb-15"><span>KURUM PROFİLİ</span></h1>
                    
     
      
     <v-container class="mt-10 " >
         <v-responsive>
                       <v-avatar size="150" class="grey lighten-2">
                            <img :src="rsm" alt="">
                       </v-avatar>
                     </v-responsive>
                     <hr> <br>
            <v-layout>
               <v-spacer></v-spacer>  <Popup /> 
            </v-layout>
                <v-layout row class="mt-10">
                  <v-flex xs4>
                      <h3> Kurum Adı : </h3>
                  </v-flex>
                    <v-flex xs8>
                        <h3>{{postList.name}} </h3>
                  </v-flex>
              </v-layout>
              <v-layout row class="mt-10">
                  <v-flex xs4>
                      <h3> Web Adresi : </h3>
                  </v-flex>
                    <v-flex xs8>
                        <h3>{{postList.web}}</h3>
                  </v-flex>
              </v-layout>
              <v-layout row class="mt-10 mb-15">
                  <v-flex xs4>
                      <h3> E-mail : </h3>
                  </v-flex>
                    <v-flex xs8>
                        <h3> {{postList.email}} </h3>
                  </v-flex>
              </v-layout>
              <div class="mt-15 mb-15">
                 <h2 class="text-center">Hakkımızda </h2> 
                 <h3 class="text-center">{{postList.about}}</h3>
              </div>
               
          
      
    
      
     </v-container> 
     
     
    <Footer />


</div>
    
</template>

<script>
import CompanyNavbar from '../components/CompanyNavbar.vue'
import Popup from '../components/Popup2.vue'
import Footer from '../components/Footer.vue'
// import axios from 'axios'

export default {
   
   components:{
       CompanyNavbar,
       Popup,
       Footer :Footer,
   },
   data(){
       return{
           postList: [],
            rsm:'/users.png',

           
       }
   },
   mounted(){
      
        // axios.get("https://profile-67e3f-default-rtdb.firebaseio.com/posts.json")
        // .then(response => {
        //      let data = response.data;
            
         
        //   for(let key in data){
        //     this.postList.push({ ...data[key], id : key })
        //   }
        // })
        // .catch(e =>console.log(e)) 
    }

   
 
 
}
</script>
<style scoped>

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