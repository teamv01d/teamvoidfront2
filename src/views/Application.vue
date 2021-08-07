<template >
    <div>
        <Navbar />
        <v-container class="mt-10 " >
            <h1 class="text-center">Vizyoner Genç İlan Başvuru</h1>
            <v-responsive>
                       <v-avatar size="150" class=" mb-10 grey lighten-2">
                            <img :src="rsm" alt="">
                       </v-avatar>
                     </v-responsive>
                    <v-layout   row  >
                        <v-flex class="bilgiler" xs5  >
                            <h2 class="mb-2" >Kişisel Bilgiler </h2>
                            <v-layout row>
                            <v-flex xs4 > 
                                <h3>Ad-Soyad : </h3>
                            </v-flex>
                            <v-flex xs8 > 
                                  <h3>Lorem ipsum dolor sit amet consectetur . </h3>
                            </v-flex>
                                  
                            </v-layout> 
                             <v-layout row>
                            <v-flex xs4 > 
                                <h3>Doğum Tarihi : </h3>
                            </v-flex>
                            <v-flex xs8 > 
                                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                            </v-flex>
                                  
                            </v-layout> 
                             <v-layout row>
                            <v-flex xs4 > 
                                <h3>Şehir : </h3>
                            </v-flex>
                            <v-flex xs8 > 
                                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                            </v-flex>
                                  
                            </v-layout> 
                             </v-flex>  
                           
                        <v-flex xs5 class="bilgiler" >
                         <h2 class="mb-2" >Eğitim Bilgileri </h2>
                         <v-layout row>
                             <v-flex xs4 > 
                                <h3>Üniversite : </h3>
                            </v-flex>
                            <v-flex xs8 > 
                                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                            </v-flex>
                                  
                            </v-layout> 
                             <v-layout row>
                            <v-flex xs4 > 
                                <h3>Bölüm : </h3>
                            </v-flex>
                            <v-flex xs8 > 
                                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                            </v-flex>
                                  
                            </v-layout> 

                               
                               
                       
                       
                        </v-flex>  

                        </v-layout>
                        <v-layout   row  >
                       
                        <v-flex class="bilgiler" xs5  >
                            <h2 class="mb-2">İletişim Bilgileri </h2>
                            <v-layout row>
                            <v-flex xs4>
                                <h3> Telefon Numarası: </h3>
                            </v-flex>
                             <v-flex xs8>
                                 <h3>Lorem ipsum dolor sit amet.</h3>
                            </v-flex>

                             </v-layout> 
                             <v-layout row>
                            <v-flex xs4>
                                <h3> Mail Adresi: </h3>
                            </v-flex>
                             <v-flex xs8>
                                 <h3>Lorem ipsum dolor sit amet.</h3>
                            </v-flex>

                             </v-layout> 
                             <v-layout row>
                             </v-layout>     
                               
                             </v-flex>  
                           
                        <v-flex xs5 class="bilgiler" >
                             <h2 class="mb-2">CV Bilgileri </h2>
                        <v-layout row>
                            <v-flex xs4>
                                <h3> CV : </h3>
                            </v-flex>
                            <v-flex xs8>
                                <h3> Lorem, ipsum. </h3>
                            </v-flex>
                        </v-layout>
                        </v-flex>   
        
                        </v-layout >
                        <v-layout row class=" mt-10" >
                            <v-flex xs10>
                               <v-layout class="test mt-10">
                                  <v-flex xs10>
                                     <h2 class="mb-2">Yetenek Testi </h2> 
                                    <h4 class="mb-1"> <v-icon>timer</v-icon> &nbsp;&nbsp; 30dk</h4>
                                    <h4 ><v-icon>computer</v-icon> &nbsp;&nbsp; JAVA</h4>
                                   

                                  </v-flex> 
                                  <v-flex  xs2>
                                    <v-btn  dark class="btn1 deep-purple darken-4"> BAŞLA </v-btn>
                                  </v-flex> 
                                </v-layout> 
                                <h4 class="not"><v-icon>report</v-icon> Yetenek testine girdikten sonra başvurunuz tamamlanacaktır.</h4>  
                             </v-flex>   
                         </v-layout>   

                        
                    
                        
            </v-container>
        <Footer />
    </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Navbar from'../components/Navbar.vue'
export default {
    components:{
        Navbar,
        Footer,
    },
    data(){
        return{
             rsm:'/us2.png',
        }
    }
}
</script>
<style>
h3{
   margin-top:10px;
}
.bilgiler{
    border:dashed 2px ;
    padding:30px;
    margin:10px;
     box-shadow: 3px 6px #311B92;
}
.test{
    border:inset 2px ;
    padding:20px;
    margin-left:30px;
    margin-bottom:20px;
     box-shadow: 5px 8px #311B92;
}
.btn1{
    color:red;
    margin-top:40px;
}
.not{
    font-size:20px;
    font-weight:bold;
     margin-left:30px;
     margin-bottom:50px;
}
</style>