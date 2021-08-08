<template >
      <v-dialog class=""  v-model="dialog"  >

 <template v-slot:activator="{ on }">
        <v-btn  @click="kontrol"  class="deep-purple darken-3" dark v-on="on">Önizleme</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2 text-center" primary-title>TEST </v-card-title>
        
        <div v-for="(que,index) in deneme" :key="index">
          <v-layout row>
            <v-flex xs6 offset-xs3 class="sorular" >
               
            <h3> {{index+1}}. {{que.question}} </h3>
             <h3> A) {{que.optionA}} </h3>
            <h3> B) {{que.optionB}}  </h3>
            <h3> C) {{que.optionC}} </h3> 
            <h3> D) {{que.optionD}} </h3> 
            <h3> Cevap {{que.answer}} </h3>
    
            </v-flex>
          </v-layout>
          
           

        </div>


        </v-card>    
          </v-dialog>
</template>
<script>
export default{
  props: ['deneme'],

 methods:{
   kontrol(){
    console.log(this.ques)
   }
 }
}

</script>
<style scoped>
.sorular{
  border:1px solid;
  border-radius: 5px;
  padding:20px;
  box-shadow: 5px 5px grey;
  margin:20px
}
</style>