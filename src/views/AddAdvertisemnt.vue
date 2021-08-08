<template>
    <div class="ilan">
        <Navbar />
        <v-container>
            <h1 class="text-center mt-10 mb-10">İLAN EKLE</h1>
           
              <form action="" >
                <div class="ilanekle pa-5 mb-10">
                  <h3>İlan Başlığını Giriniz.. </h3>
                 
                   <v-text-field  v-model="advertisement_name" required  label="Title" > </v-text-field>
                  <h3>İlan Konusunu Giriniz.. </h3>
                <v-textarea v-model="explanation" required > </v-textarea>
                   
                 <v-select  :items="cities"  v-model="city"   filled   label="İl Seçiniz"></v-select>
                <h3 class="left" for="">İlan Bitiş Tarihini Seçiniz <v-icon @click="tarihgor">date_range</v-icon></h3> <br>
           <v-date-picker required v-if="tarih" v-model="end_date"></v-date-picker>
                 </div>
                 <v-layout row>
                      <h4 dark class="pa-3 butonlar ml-3 mr-3 deep-purple darken-3" for=""> YETENEK TESTİ EKLE  </h4>
                      <v-switch @click="y_testisecenek"
                color="indigo"   value="green"  hide-details >
            
              </v-switch> 
                 </v-layout>
            
              <br>
            <v-layout row >
           
           <h4 v-if="veritabani" dark class="pa-2 ml-3 mt-5 butonlar mr-3 deep-purple darken-3" for=""> Veritabanından Getir  </h4>
                <v-switch v-if="veritabani" @click="secenekgoster"
                color="indigo"   value="green"  hide-details >
            
              </v-switch> 
        
            
              
              <h4 v-if="yourself" dark class="pa-2 mt-5 butonlar ml-6 mr-3 deep-purple darken-3" for=""> Kendin Oluştur  </h4>
                <v-switch v-if="yourself" @click="kendinolustur"
                color="indigo"   value="green"  hide-details >
            
              </v-switch> 
           
            </v-layout>

          
        
          
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
            <h3 > {{index+1}}. {{sor.question}}</h3>
            <h3> A) {{sor.optionA}}  </h3>
            <h3> B) {{sor.optionB}} </h3> 
            <h3> C) {{sor.optionC}} </h3>
            <h3> D) {{sor.optionD}} </h3>
            <h3> Cevap : {{sor.answer}} </h3>
             <v-btn class="btn-right error" @click="qdelete(sor)"> <v-icon>delete</v-icon></v-btn>
            <v-btn  :disabled="checkstatus(sor)"  class=" mr-3 btn-right success"   @click="ekle(sor)" > Seç </v-btn>
           
        </div>
        <Onizleme :ques="onizlemesoru" /> 
        <v-btn @click="testikaydet" dark class=" ml-3 deep-purple darken-3"> Kaydet </v-btn>
      
      
       </v-flex>
   </v-layout>
    <!-- <v-layout v-if="psorular" row class="mt-10">
       <v-flex xs6 offset-3>  
           <h2 class="mb-10 text-center"> {{konu}} SORULARI </h2>
      <div>onizlemesoru</div>
      
        <v-btn dark class="ml-5 deep-purple darken-3"> Kaydet </v-btn>
      
      
       </v-flex>
   </v-layout> -->

           </div>
           
            <div  v-if="self_question">
              <v-layout row >
                 <v-flex class="testolustur" xs6 offset-3>  
                   <form action="">
            <label for=""> Sınav Konusunu Giriniz:</label> <v-text-field required v-model="sinavkonusu" > </v-text-field>
          
           
           

           <br> <v-btn :disabled="kontrol"  class="renk deep-purple darken-3" type="submit" @click="testolustur" >Oluştur</v-btn>
              
                </form>
                </v-flex>
              </v-layout>
            </div>
            <v-btn  dark class="mb-15 btn-right deep-purple darken-3" v-if="btn1" @click="gor1"> Soru ekle</v-btn>
            <div >
              <div v-if="testsorulari"    >
                <v-layout>
                   <v-flex xs6 offset-3 class="testolustur mt-15"  >
                <label for=""> Soruyu Giriniz:</label> <v-text-field  :value="oldText" @input="updateContent"  > </v-text-field>
              <label for=""> A Şıkkını Giriniz:</label><v-text-field :value="oldText"  @input="updateA" > </v-text-field>
              <label for=""> B Şıkkını Giriniz:</label><v-text-field  :value="oldText" @input="updateB"> </v-text-field>
              <label for=""> C Şıkkını Giriniz:</label><v-text-field  :value="oldText" @input="updateC"  > </v-text-field>
              <label for=""> D Şıkkını Giriniz:</label><v-text-field  :value="oldText" @input="updateD" > </v-text-field>
                <v-select  :items="options"  :value="oldText" @input="updateS"   filled   label="Doğru Cevap Şıkkını Seçiniz"></v-select>                         
              
              <v-btn  dark class="deep-purple darken-3" @click="approve()">Onayla</v-btn>
                   </v-flex> 

                </v-layout>
               
                
              <!-- <div  v-for="(i,index) in parseInt(sorusayisi)" :key="index">
             
            <v-layout>
             <v-flex :id="i" xs6 offset-3 class="testolustur mt-15"  >
              <label for=""> {{i}}.Soruyu Giriniz:</label> <v-text-field @input="updateContent()"  > </v-text-field>
              <label for=""> A Şıkkını Giriniz:</label><v-text-field :value="oldText" v-model="responses[index].asik"  > </v-text-field>
              <label for=""> B Şıkkını Giriniz:</label><v-text-field  @input="updateB()"> </v-text-field>
              <label for=""> C Şıkkını Giriniz:</label><v-text-field  @input="updateC()"  > </v-text-field>
              <label for=""> D Şıkkını Giriniz:</label><v-text-field  @input="updateD()" > </v-text-field>
                <v-select  :items="options"  @input="updateS"   filled   label="Doğru Cevap Şıkkını Seçiniz"></v-select>                         
              <v-btn class="btn-right" @click="remove">Kaldır</v-btn>
              <v-btn class="btn-right mr-3" @click="approve(index)">Onayla</v-btn>
             </v-flex>                                                                                                                                                                         
            </v-layout>
            </div> -->
            <!-- <v-layout row class="mt-10">
             <v-flex xs6 offset-3>
                 <Onizleme :ques="onizlemesoru2" />  -->
            <!-- <v-btn dark class="deep-purple darken-3">  Kaydet</v-btn>
               </v-flex> 
            </v-layout> --> -->
          
            </div>
             <Onizleme v-if="oniz" class="btn-right" :ques="onizlemesoru" /> 
            </div>
              
            <br> <br>
           <hr>
           <div class="mb-15 mt-5">
                <v-btn @click="ilanolustur" type="submit" dark class=" btn-right deep-purple darken-3"> Oluştur </v-btn> 
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
         advertisement_name:"",
         explanation:"",
         end_date:"",
         cities:[
           "Adana","Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
            "Aydın", "Balıkesir","Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale",
            "Çankırı", "Çorum","Denizli","Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum ", "Eskişehir",
            "Gaziantep", "Giresun","Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir",
            "Kars", "Kastamonu", "Kayseri","Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya ", "Malatya",
            "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya",
            "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon  ", "Tunceli", "Şanlıurfa", "Uşak",
            "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt ", "Karaman", "Kırıkkale", "Batman", "Şırnak",
            "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük ", "Kilis", "Osmaniye ", "Düzce"
         ],
         city:"",
         veritabani:false,
         yourself:false,
         veritabani_q:false,
         self_question:false,
         konu:'',
         konu_liste:false,
         btn1:false,
         v_sorular:[],
         onizlemesoru:[],
         psorular:false,
         sorusayisi:null,
         sorusayisi2:'',
         testsorulari:false,
         options:[
           "A","B","C","D"
         ],
         sinavkonusu:'',
         
        kontrol:false,
         responses:[],
       
         bla:{
         question:"",
         optionA:"",
         optionB:"",
         optionC:"",
         optionD:"",
         answer:"",
         
         },
        oniz:false,
         tarih:false
        
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
        this.btn1=false
   
        },
        secenekgoster(){
            this.yourself=!this.yourself
            this.konu_liste=!this.konu_liste
        },
        sorularigor(){
         this.konu='JAVA',
         this.veritabani_q=true
         //this.psorular=false
         if(this.v_sorular==0){
           axios.get("https://profile-67e3f-default-rtdb.firebaseio.com/posts.json")
          .then(response => {
            console.log("basarili java")
          let data = response.data;
          console.log(data)
            
          for(let key in data){
            this.v_sorular.push({ ...data[key], id : key })

          }
          console.log(this.veritabani_q)
          console.log(this.v_sorular)
          
         
        })
          .catch(e =>console.log(e)) 
         }
         
        
      
        },

      updateContent(value){
      this.bla.question=value
       
      }, 
      updateA(value){
      
       this.bla.optionA=value
         },
        
   
        
        // this.responses[index].asik=$event.target.value
        
    
     
      updateB(value){
       this.bla.optionB=value
        // this.bla.bsik=value;
        // console.log(this.bla.bsik)
      },
      updateC(value){
       this.bla.optionC=value
        
      },
      updateD(value){
         this.bla.optionD=value
     
      },
      updateS(value){
      this.bla.answer=value
        
      },

        python(){
         this.v_sorular=[]
         this.onizlemesoru=0
        this.veritabani_q=true 
          //this.psorular=true
          this.konu='Python'
          console.log("basarili python")
        },
    
        kendinolustur(){
            this.veritabani=!this.veritabani
            this.self_question=!this.self_question
            this.testsorulari=false
            this.konu_liste=false
            this.btn1=false
            this.oniz=false
          },
        ekle(sor){
         this.onizlemesoru.push(sor);
       
        },
        checkstatus(sor){
          let nisa = []
          if (this.onizlemesoru.length > 0) {
             nisa=this.onizlemesoru.filter((val)=>{
            return sor.question=== val.question

          })
          }
         
          return nisa.length>0

        },
        qdelete(sor){
          this.onizlemesoru.splice(this.onizlemesoru.indexOf(sor), 1);
        },
        gor1(){
           this.testsorulari=true;
          
           this.responses.push(this.bla);
           this.btn1=false
         
        },
        tarihgor(){
          this.tarih=!this.tarih
        },
        testolustur(){
        
            if(this.sinavkonusu){
              this.btn1=true
              this.kontrol=true
              this.oniz=true
              
            }
            
            
         
          
          // let i=0;
          // while(i < parseInt(this.sorusayisi))
          // {
          //   this.responses.push(this.bla);
          //   i++;
          // }
          // console.log(this.responses)
         
         
        },

        testikaydet(){
        axios.post("https://profile-67e3f-default-rtdb.firebaseio.com/posts.json",...this.onizlemesoru)
        .then(response => {
          console.log(this.onizlemesoru)
          console.log(response)
        })
        },
        approve(){
          if(this.bla.question && this.bla.optionA && this.bla.optionB && this.bla.optionC && this.bla.optionD && this.bla.answer )
        {  this.onizlemesoru.push({...this.bla})
          alert("sorular eklendi");
         
          this.testsorulari=false
          this.btn1=true
       }
       else{
         alert("Bilgileri eksiksiz giriniz!")
       }
          
          
        },
        ilanolustur(){
          // if(this.end_date && this.explanation && this.advertisement_name &&this.city)
          // { 
          //   var zaman=new Date();
          //   var zmn=zaman.getDay()+ '/'+ (zaman.getMonth()+1)+'/' +zaman.getFullYear();
          //   var formData = new FormData();
          //   formData.append("advertisement_name",this.advertisement_name);
          //   formData.append("explanation",this.explanation);
          //   formData.append("end_date",this.end_date);
          //   formData.append("start_date",zmn);
          //   formData.append("city",this.end_city);

            

      //   this.$axios.post(endpoint.auth.?,formData)
      //  .then(response =>{

      //  })
       
      // this.$axios.post(endpoint.auth.?,this.onizlemesoru)
      //  .then(response =>{

      //  })

      //     }
      //     else {
      //       alert("Gerekli Bilgileri Giriniz.");
      //       // var zaman=new Date();
      //       // var zmn=zaman.getDay()+ '/'+ (zaman.getMonth()+1)+'/' +zaman.getFullYear();
      //       // console.log(zmn)
      //     }



          }
        }
       
       
    
    
}
</script>
<style scoped>
.ilanekle{
     border:inset 2px ;
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
.renk{
  color:white
}

</style>