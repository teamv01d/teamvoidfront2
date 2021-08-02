<template>
    <div class="ilan">
        <Navbar />
        <v-container>
            <h1 class="text-center mt-10 mb-10">İLAN EKLE</h1>
              <form action="" >
                <div class="ilanekle pa-5 mb-10">
                 <label for="">İlan Başlığını Giriniz..</label>
                   <v-text-field  required  label="Title" > </v-text-field>
                   <label for="">İlan Konusunu Giriniz..</label>
                <v-textarea required >
            
                </v-textarea>
                 </div>
               
          <v-btn dark class="mb-10  deep-purple darken-3" @click="testsecenek"> YETENEK TESTİ EKLE <v-icon>add</v-icon> </v-btn> <br>
      
             <v-btn dark class="mb-3  deep-purple darken-3" v-if="veritabani" @click="secenekgoster"> Veritabanından Getir</v-btn>
          <v-btn dark class="deep-purple darken-3  ml-5 mb-3" v-if="kendin" @click="kendinolustur" > Kendin Oluştur</v-btn>
        
          
           <div v-if="liste" >
      <v-menu offset-y class="mt-10 mb-10">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="deep-purple darken-3"  dark  v-bind="attrs" v-on="on" >
         KONULAR <v-icon>expand_more</v-icon>
        </v-btn>
      </template>
      <v-list  >
        <v-list-item @click="sorularigor"> JAVA </v-list-item > 
         <v-list-item  @click="python">  PYHTON  </v-list-item>
         <v-list-item>  C# </v-list-item>
      </v-list>
    </v-menu>
    <v-layout v-if="sorular" row class="mt-10">
       <v-flex xs6 offset-3>  
           <h2 class="mb-10 text-center"> {{konu}} SORULARI </h2>
        <div class="sorular" v-for="(sor,index) in soru" :key="index"  >
            <h3 > {{idx}} . {{sor.soru}}</h3>
            <h3> A) {{sor.a}}  </h3>
            <h3> B) {{sor.b}} </h3> 
            <h3> C) {{sor.c}} </h3>
            <h3> D) {{sor.d}} </h3>
            <v-btn  dark class="btn-right deep-purple darken-3" v-if="veritabani"  @click="ekle(sor)" > Seç </v-btn>
           
        </div>
        <Onizleme :ques="deneme" /> 
        <v-btn dark class=" ml-3 deep-purple darken-3"> Kaydet </v-btn>
      
      
       </v-flex>
   </v-layout>
    <v-layout v-if="psorular" row class="mt-10">
       <v-flex xs6 offset-3>  
           <h2 class="mb-10 text-center"> {{konu}} SORULARI </h2>
      <div>deneme</div>
      
        <v-btn dark class="ml-5 deep-purple darken-3"> Kaydet </v-btn>
      
      
       </v-flex>
   </v-layout>

           </div>
           
            <div  v-if="selfq">
              <v-layout row >
                 <v-flex class="testolustur" xs6 offset-3>  
                   <form action="">
            <label for=""> Sınav Konusunu Giriniz:</label> <v-text-field required > </v-text-field>
            <label for=""> Soru Sayısını Giriniz:</label> <v-text-field  required  v-model="sorusayisi" type="number"> </v-text-field>
            <label for=""> Doğru Cevap Puanını Giriniz:</label> <v-text-field  required  type="number"> </v-text-field>
            <v-btn dark class="deep-purple darken-3" type="submit" @click="testolustur">Oluştur</v-btn>
                </form>
                </v-flex>
              </v-layout>
            </div>
              <div v-if="testsorulari" >
              <div v-for="i in parseInt(sorusayisi2)" :key="i">
            <v-layout>
             <v-flex xs6 offset-3 class="testolustur mt-15"  >
              <label for=""> {{i}}.Soruyu Giriniz:</label> <v-text-field > </v-text-field>
              <label for=""> A Şıkkını Giriniz:</label><v-text-field > </v-text-field>
              <label for=""> B Şıkkını Giriniz:</label><v-text-field > </v-text-field>
              <label for=""> C Şıkkını Giriniz:</label><v-text-field > </v-text-field>
              <label for=""> D Şıkkını Giriniz:</label><v-text-field > </v-text-field>
                <v-select  :items="items"   filled   label="Doğru Cevap Şıkkını Seçiniz"></v-select>
         
             </v-flex>
            </v-layout>
            </div>
            <v-layout row class="mt-10">
             <v-flex xs6 offset-3>
               <v-btn dark class="mr-5 deep-purple darken-3"> Önizleme</v-btn>
            <v-btn dark class="deep-purple darken-3">  Kaydet</v-btn>
               </v-flex> 
            </v-layout>
          
            </div>
            <br>
            <div class="mb-10">
                <v-btn type="submit" dark class=" btn-right deep-purple darken-3"> Oluştur </v-btn> 
            </div>
              
             </form>  
        </v-container>
        <Footer />
    </div>
</template>
<script>
import Navbar from '../components/CompanyNavbar'
import Footer from '../components/Footer.vue'
import axios from 'axios'
import Onizleme from '../components/Onizleme.vue'



export default {
    components:{
        Navbar,
        Footer,
        Onizleme,
     
    },
    data(){
       return{
         liste:false,
         sorular:false,
         psorular:false,
         isactive:false,
         soru:[],
         onizlemesoru:[],
         cnt:5,
         veritabani:false,
         kendin:false,
         selfq:false,
         soruid:'',
         deneme:[],
         konu:'',
         idx:0,
         sorusayisi:null,
         testsorulari:false,
         sorusayisi2:'',
         items:[
           "A","B","C","D"
         ]
        
       }
    },
    methods:{
        testsecenek(){
           setTimeout(() => this.kendin = !this.kendin,
            1000);
            setTimeout(() =>    this.veritabani=!this.veritabani,
            1000);
       
       
        this.sorular=false
        this.liste=false
   
        },
        secenekgoster(){
            this.kendin=!this.kendin
            this.liste=!this.liste
        },
        sorularigor(){
          this.konu='JAVA',
         this.sorular=true,
         this.psorular=false
         
          axios.get("https://profile-67e3f-default-rtdb.firebaseio.com/posts.json")
        .then(response => {
           
             let data = response.data;
            
          for(let key in data){
            this.soru.push({ ...data[key], id : key })
          }
         
        })
        .catch(e =>console.log(e)) 
        },


        python(){
          this.sorular=false  
          this.psorular=true
          this.konu='Python'
        },
      
        arttir(){
          this.idx=this.idx+1
        },
        kendinolustur(){
            this.veritabani=!this.veritabani
            this.selfq=!this.selfq
          },
        ekle(sor){
         this.deneme.push(sor);
         
        },
        testolustur(){
          this.testsorulari=true
          this.sorusayisi2=this.sorusayisi
        }
       
       
    },
    
}
</script>
<style scoped>
.ilanekle{
    border: 1px solid;
    border-radius: 5px;
    padding: 20px;
     box-shadow: 10px 10px grey;
    
}
.sorular{
   
  border:1px solid;
  border-radius: 5px;
  padding:20px;
  margin-bottom: 20px;
  box-shadow: 10px 10px grey;
  padding-bottom: 50px;

}
.testolustur{
  border:1px solid;
  border-radius: 5px;
  padding:20px;
  box-shadow: 10px 10px grey;
 
}
.btn-right{
  float:right
}
</style>