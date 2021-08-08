<template>
<div >
    <CompanyNavbar />
     <h1  class="text-center mt-10 mb-15"><span>KURUM PROFİLİ</span></h1>
                    
     
      
     <v-container class="mt-10 " >
         <v-responsive>
                       <v-avatar size="150" class="grey lighten-2">
                            <img :src="rsm" alt="">
                       </v-avatar> <br> <br>
                       <Popup5 />
                     </v-responsive>
                     <br> <hr> <br>
            <v-layout>
               <v-spacer></v-spacer>  <Popup /> 
            </v-layout>
               <div v-for="c in postList" :key="c">
                <v-layout row class="mt-10">
                  <v-flex xs4>
                      <h3> Kurum Adı : </h3>
                  </v-flex>
                    <v-flex xs8>
                        <h3>{{c.name}} </h3>
                  </v-flex>
              </v-layout>
              <v-layout row class="mt-10">
                  <v-flex xs4>
                      <h3> Web Adresi : </h3>
                  </v-flex>
                    <v-flex xs8>
                        <h3>{{c.web}}</h3>
                  </v-flex>
              </v-layout>
                <v-layout row class="mt-10">
                  <v-flex xs4>
                      <h3> Şehir : </h3>
                  </v-flex>
                    <v-flex xs8>
                        <h3>{{c.city}}</h3>
                  </v-flex>
              </v-layout>
                <v-layout row class="mt-10">
                  <v-flex xs4>
                      <h3> Telefon Numarası : </h3>
                  </v-flex>
                    <v-flex xs8>
                        <h3>{{c.phone}}</h3>
                  </v-flex>
              </v-layout>
              <v-layout row class="mt-10 mb-15">
                  <v-flex xs4>
                      <h3> E-mail : </h3>
                  </v-flex>
                    <v-flex xs8>
                        <h3> {{c.email}} </h3>
                  </v-flex>
              </v-layout>
               </div>
              <div class="mt-15 mb-15">
                 <h2 class="text-center">Hakkımızda </h2> 
                 <h3 class="text-center">{{postList[0].about}}</h3>
              </div>
               
          
      
    
      
     </v-container> 
     
     
    <Footer />


</div>
    
</template>

<script>
import CompanyNavbar from '../components/CompanyNavbar.vue'
import Popup from '../components/Popup2.vue'
import Popup5 from '../components/Popup5.vue'
import Footer from '../components/Footer.vue'
import endpoint from "@/lib/api";


export default {
   
   components:{
       CompanyNavbar,
       Popup,
       Popup5,
       Footer :Footer,
   },
   data(){
       return{
           postList: [],
            rsm:'/users.png',

           
       }
   },
   mounted(){
      
       this.$axios.get(endpoint.auth.company)
        .then(response => {
             let data = response.data;
             console.log(data)
             this.postList.push(data);
       
         this.rsm=this.postList[0].photo
         
        })
        

        .catch(e =>console.log(e));
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