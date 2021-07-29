<template>
<div class="company">
    <CompanyNavbar />
     <h1  class="text-center mt-10 mb-15"><span>KURUM PROFİLİ</span></h1>
     <v-container class="mt-10">
         
              
               <h2 class="mb-15"> VİZYONER GENÇ</h2>
              <v-layout row>
                  <v-flex md8>
                      <h4  class="mb-4"> <v-icon> public</v-icon> Web Adresimiz: </h4>
                <h4  class="mb-4"> <v-icon> email</v-icon> E-mail: </h4> 
                  </v-flex>
                  <v-flex md4> 
                      <Popup />
                  </v-flex>
              </v-layout>
               
               <h3 class="text-center mt-16 mb-5">HAKKIMIZDA</h3>
               <p class="text-center ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aliquid pariatur, est iste ad atque! Modi et ipsum ducimus eligendi sapiente. Vero iusto sed officiis a, iste consequuntur inventore aliquid neque dolores odit architecto id, repellat earum maiores quo cumque autem? Ullam odit excepturi quidem impedit incidunt fugiat magni necessitatibus ducimus eligendi dolore pariatur eos veniam modi suscipit repellat, beatae totam, eius error animi quasi! Amet deserunt explicabo distinctio natus aspernatur praesentium optio numquam eveniet aliquid accusantium ea pariatur, dolor reiciendis adipisci fugiat, nobis fugit repellendus. Totam quod id est sint deleniti ipsum dicta corrupti dolorum, perferendis repellat fugit doloremque.</p>
    



     </v-container>    


</div>
    
</template>

<script>
import CompanyNavbar from '../components/CompanyNavbar.vue'
import Popup from '../components/Popup5.vue'
export default {
   components:{
       CompanyNavbar,
       Popup
   }
}
</script>
<style scoped>
.company{
     background-color:#EDE7F6;
     height: 1000px;
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