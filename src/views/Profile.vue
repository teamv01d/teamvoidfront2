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
                         <h3 class="mb-3"> Ad-Soyad : NİSANUR ÇELİK</h3>
                        
                     </div>
                  
                </v-flex>

            </v-layout>
           <hr>
          
           <v-layout row class="mt-10">
            <v-flex md8>
            <h2 class="my-5">Bilgilerim</h2>
            <h3> Doğum Tarihi : {{birthday}} </h3>
            <h3> Şehir : {{city}}</h3> 
            <h3> Hakkımda :{{yourself}}</h3>
            <h3> Üniversite : {{university}}</h3>
            <h3> Bölüm : {{department}}</h3>
            <h3> Telefon Numarası :{{phone}}</h3>
            <h3>Mail Adresi: nisancliik7@gmail.com</h3>
            <h3>CV : {{selectedFile}}</h3>
           
            


            </v-flex>  
            <v-flex md4>
              <h2 class="my-5">Bilgileri Düzenle <v-icon right>edit</v-icon> </h2> 
              <Popup1 @birthday="birthday=$event" @city="city=$event" @yourself="yourself=$event"   />  <br> <br>
              <Popup2  @university="university=$event"  @department="department=$event"/>  <br> <br>
              <Popup3 @selectedFile="selectedFile=$event"/>  <br> <br>
              <Popup4 @phone="phone=$event" />  <br> <br>
            </v-flex>   
        
         </v-layout>
        </v-container>
    </div>
</template>
<script>

import Popup2 from '../components/Popup2.vue'
import Popup1 from '../components/Popup1.vue'
import Popup3 from '../components/Popup3.vue'
import Popup4 from '../components/Popup4.vue'
import Navbar from '../components/Navbar.vue'
export default {
    components:{
        Navbar,
        Popup1,
        Popup2,
        Popup3,
        Popup4,
    },
   data() {
       return {
           user:[
               { user:'nisanur celik',avatar:'/nisanurcelik.jpg'}
           ],
           birthday:'',
           city:'',
           yourself:'',
           university:'',
           department:'',
           selectedFile:'',
           phone:'',
          
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

</style>                    