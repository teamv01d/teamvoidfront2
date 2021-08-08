<template>
    <v-dialog class=""  v-model="dialog" height="800"  width="800">
        
      <template v-slot:activator="{ on }">
         
           <v-btn  class=" mr-2 deep-purple darken-3" dark v-on="on"> CV Gör &nbsp; <v-icon>visibility</v-icon> </v-btn>
             </template>
          <v-card>
              <v-cart-text class="mt-15">
                    <h2 class="text-center">CV</h2>

           <img  :src="cv" />
      </v-cart-text>   
          </v-card>
        
 </v-dialog>   
</template>
<script>
export default{
  props: ["cv"],

}
</script>
