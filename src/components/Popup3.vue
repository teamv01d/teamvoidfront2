<template>
  
    <v-dialog class=""  v-model="dialog"  width="500">
        
      <template v-slot:activator="{ on }">
        <v-btn width="400px" class="deep-purple darken-3" dark v-on="on">İş Geçmişini Düzenle</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>İş Geçmişini Düzenle</v-card-title>
        <v-cart-text>
       <v-cart-text>
        <v-form class="mt-3 pa-3" ref="form">
            <!-- <label for=""> 1)Daha önce çalıştığınız kurumları giriniz..</label>
            <v-textarea label="Title" v-model="kurum"  >
              
            </v-textarea> -->
            <v-file-input v-model="selectedFile" @change="onFileSelected" />
             
            <v-btn right dark flat class="deep-purple darken-3"  @click="onUpload">Kaydet</v-btn>
           
        </v-form>
        </v-cart-text>
        </v-cart-text>
      
      </v-card>
    </v-dialog>

</template>
<script>
export default {
    data(){
      return{
        kurum:'',
        selectedFile:'null'
      }
    },
    methods:{
      submit(){
        this.$emit("kurum",this.kurum)
      },
      onFileSelected(event){
        this.selectedFile=event.target.files[0]
      },
      onUpload(){
        this.$emit("selectedFile",this.selectedFile)
      }
    }
}
</script>
<style scoped>
label{
  font-weight: bold;
  font-size: 20px;
}
</style>