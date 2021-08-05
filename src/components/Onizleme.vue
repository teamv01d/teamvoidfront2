<template >
      <v-dialog class=""  v-model="dialog"  >

 <template v-slot:activator="{ on }">
        <v-btn   class="deep-purple darken-3" dark v-on="on">Önizleme</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2 text-center" primary-title>TEST </v-card-title>
        
        <div v-for="(que,index) in ques" :key="index">
          <v-layout row>
            <v-flex xs6 offset-xs3 class="sorular" >
               
            <h3> {{index+1}}. {{que.content}} </h3>
             <h3> A) {{que.asik}} </h3>
            <h3> B) {{que.bsik}}  </h3>
            <h3> C) {{que.csik}} </h3> 
            <h3> D) {{que.dsik}} </h3> 
            <v-btn @click="goster"> </v-btn>

            </v-flex>
          </v-layout>
          
           

        </div>


        </v-card>    
          </v-dialog>
</template>
<script>
export default{
  props: ["ques"],
 methods:{
   goster(){
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