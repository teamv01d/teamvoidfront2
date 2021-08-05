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
                 <v-layout row>
                      <h4 dark class="pa-4 butonlar mr-3 deep-purple darken-3" for=""> YETENEK TESTİ EKLE  </h4>
                      <v-switch @click="y_testisecenek"
                color="indigo"   value="green"  hide-details >
            
              </v-switch> 
                 </v-layout>
             
                <!-- dark class="mb-10  deep-purple darken-3" -->
          <!-- <v-btn @click="y_testisecenek"> -->
             
              <!-- </v-btn>  -->
              <br>
            <v-layout row >
           
           <h4 v-if="veritabani" dark class="pa-2 mt-5 butonlar mr-3 deep-purple darken-3" for=""> Veritabanından Getir  </h4>
                <v-switch v-if="veritabani" @click="secenekgoster"
                color="indigo"   value="green"  hide-details >
            
              </v-switch> 
        
            
              
              <h4 v-if="yourself" dark class="pa-2 mt-5 butonlar ml-6 mr-3 deep-purple darken-3" for=""> Kendin Oluştur  </h4>
                <v-switch v-if="yourself" @click="kendinolustur"
                color="indigo"   value="green"  hide-details >
            
              </v-switch> 
           
            </v-layout>

             <!-- <v-btn dark class="mb-3  deep-purple darken-3" v-if="veritabani" @click="secenekgoster"> Veritabanından Getir</v-btn>
          <v-btn dark class="deep-purple darken-3  ml-5 mb-3" v-if="yourself" @click="kendinolustur" > Kendin Oluştur</v-btn> -->
        
          
           <div v-if="konu_liste" >
      <v-menu offset-y class="mt-10 mb-10">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="deep-purple darken-3 mt-5"  dark  v-bind="attrs" v-on="on" >
         KONULAR <v-icon>expand_more</v-icon>
        </v-btn>
      </template>
      <v-list  >
        <v-list-item @click="sorularigor"> JAVA </v-list-item > 
         <v-list-item  @click="python">  PYHTON  </v-list-item>
         <v-list-item>  C# </v-list-item>
      </v-list>
    </v-menu>
    <v-layout v-if="veritabani_q" row class="mt-10">
       <v-flex xs6 offset-3>  
           <h2 class="mb-10 text-center"> {{konu}} SORULARI </h2>
        <div class="sorular" v-for="(sor,index) in v_sorular " :key="index" >
            <h3 > {{index+1}}. {{sor.soru}}</h3>
            <h3> A) {{sor.a}}  </h3>
            <h3> B) {{sor.b}} </h3> 
            <h3> C) {{sor.c}} </h3>
            <h3> D) {{sor.d}} </h3>
             <v-btn class="btn-right error" @click="qdelete(sor)"> <v-icon>delete</v-icon></v-btn>
            <v-btn  :disabled="checkstatus(sor)"  class=" mr-3 btn-right success"   @click="ekle(sor)" > Seç </v-btn>
           
        </div>
        <Onizleme :ques="onizlemesoru" /> 
        <v-btn @click="testikaydet" dark class=" ml-3 deep-purple darken-3"> Kaydet </v-btn>
      
      
       </v-flex>
   </v-layout>
    <v-layout v-if="psorular" row class="mt-10">
       <v-flex xs6 offset-3>  
           <h2 class="mb-10 text-center"> {{konu}} SORULARI </h2>
      <div>onizlemesoru</div>
      
        <v-btn dark class="ml-5 deep-purple darken-3"> Kaydet </v-btn>
      
      
       </v-flex>
   </v-layout>

           </div>
           
            <div  v-if="self_question">
              <v-layout row >
                 <v-flex class="testolustur" xs6 offset-3>  
                   <form action="">
            <label for=""> Sınav Konusunu Giriniz:</label> <v-text-field required v-model="sinavkonusu" > </v-text-field>
            <label for=""> Soru Sayısını Giriniz:</label> <v-text-field  required  v-model="sorusayisi" type="number"> </v-text-field>
            <label for=""> Doğru Cevap Puanını Giriniz:</label> <v-text-field  v-model="puan" required  type="number"> </v-text-field>
            <v-btn dark class="deep-purple darken-3" type="submit" @click="testolustur" >Oluştur</v-btn>
              
                </form>
                </v-flex>
              </v-layout>
            </div>
              <div v-if="testsorulari" >
              <div v-for="(i,index) in parseInt(sorusayisi)" :key="index">
             
            <v-layout>
             <v-flex xs6 offset-3 class="testolustur mt-15"  >
              <label for=""> {{i}}.Soruyu Giriniz:</label> <v-text-field @input="updateContent(i-1)"  > </v-text-field>
              <label for=""> A Şıkkını Giriniz:</label><v-text-field name="test"   @input="updateA()"  > </v-text-field>
              <label for=""> B Şıkkını Giriniz:</label><v-text-field  @input="updateB(i-1)"> </v-text-field>
              <label for=""> C Şıkkını Giriniz:</label><v-text-field  @input="updateC(i-1)"  > </v-text-field>
              <label for=""> D Şıkkını Giriniz:</label><v-text-field  @input="updateD(i-1)" > </v-text-field>
                <v-select  :items="options"  @input="updateS"   filled   label="Doğru Cevap Şıkkını Seçiniz"></v-select>                         
              <v-btn class="btn-right" @click="remove">Kaldır</v-btn>
              <v-btn class="btn-right mr-3" @click="approve(responses[i-1])">Onayla</v-btn>
             </v-flex>                                                                                                                                                                         
            </v-layout>
            </div>
            <v-layout row class="mt-10">
             <v-flex xs6 offset-3>
                <!-- <Onizleme :ques="onizlemesoru2" />  -->
            <v-btn dark class="deep-purple darken-3">  Kaydet</v-btn>
               </v-flex> 
            </v-layout>
          
            </div>
            <br> <br>
           <hr>
           <div class="mb-15 mt-5">
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
         veritabani:false,
         yourself:false,
         veritabani_q:false,
         self_question:false,
         konu:'',
         konu_liste:false,
         v_sorular:[],
         onizlemesoru:[],
         onizlemesoru2:[],
         psorular:false,
         sorusayisi:null,
         sorusayisi2:'',
         testsorulari:false,
         options:[
           "A","B","C","D"
         ],
         sinavkonusu:'',
         puan:'',
         responses:[],
       
         bla:{
            
         content:"",
         asik:"",
         bsik:"",
         csik:"",
         dsik:"",
         secilen:"",
         
         },
        
        
       }
    },
    methods:{
        y_testisecenek(){
           setTimeout(() => this.yourself = !this.yourself,
            1000);
            setTimeout(() =>    this.veritabani=!this.veritabani,
            1000);
       
       
        this.testsorulari=false
        this.konu_liste=false
        this.self_question=false
   
        },
        secenekgoster(){
            this.yourself=!this.yourself
            this.konu_liste=!this.konu_liste
        },
        sorularigor(){
         this.konu='JAVA',
         this.veritabani_q=true,
         this.psorular=false
         if(this.v_sorular==0){
           axios.get("https://profile-67e3f-default-rtdb.firebaseio.com/posts.json")
          .then(response => {
          let data = response.data;
            
          for(let key in data){
            this.v_sorular.push({ ...data[key], id : key })
          }
         
        })
          .catch(e =>console.log(e)) 
         }
         
        
      
        },

      updateContent(value,index){
        console.log(value)
        this.responses[index].content=value
       
        // this.bla.content=value;
        // console.log(this.bla.content)
      }, updateA(){
     
         const field = document.querySelector("input[name=test]").value;
         console.log(field)
      
   
        
        // this.responses[index].asik=$event.target.value
        // this.bla.asik=value;
        // console.log(this.bla.asik)
    
      },
      updateB($event,index){
        this.responses[index].bsik=$event
        // this.bla.bsik=value;
        // console.log(this.bla.bsik)
      },
      updateC($event,index){
        this.responses[index].csik=$event
        // this.bla.csik=value;
        // console.log(this.bla.csik)
      },
      updateD($event,index){
        this.responses[index].dsik=$event
        // this.bla.dsik=value;
        // console.log(this.bla.dsik)
      },
      updateS($event,index){
        this.responses[index].secilen=$event
        // this.bla.secilen=value;
        // console.log(this.bla.secilen)
      },

        python(){
          this.veritabani_q=false  
          this.psorular=true
          this.konu='Python'
        },
    
        kendinolustur(){
            this.veritabani=!this.veritabani
            this.self_question=!this.self_question
            this.testsorulari=false
            this.konu_liste=false
          },
        ekle(sor){
         this.onizlemesoru.push(sor);
       
        },
        checkstatus(sor){
          const nisa=this.onizlemesoru.filter((val)=>{
            return sor.soru=== val.soru

          })
          return nisa.length>0

        },
        qdelete(sor){
          this.onizlemesoru.splice(this.onizlemesoru.indexOf(sor), 1);
        },
        testolustur(){
          if(this.sinavkonusu && this.puan &&this.sorusayisi)
          {
          this.testsorulari=true
          this.sorusayisi2=this.sorusayisi
          }
          let i=0;
          while(i < parseInt(this.sorusayisi))
          {
            this.responses.push(this.bla);
            i++;
          }
          console.log(this.responses)
         
         
        },

        testikaydet(){
        axios.post("https://profile-67e3f-default-rtdb.firebaseio.com/posts.json",...this.onizlemesoru)
        .then(response => {
          console.log(this.onizlemesoru)
          console.log(response)
        })
        },
        approve(value){
          
        this.onizlemesoru2.push(value);
        console.log(this.onizlemesoru2)
        //console.log(this.onizlemesoru2);
          // this.onizlemesoru2.push(bla);
          
          
        },
        remove(){

        }
       
       
    }
    
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
.butonlar{
  color:white;
  border-radius: 5px;
}
</style>