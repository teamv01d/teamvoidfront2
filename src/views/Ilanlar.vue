<template>
 <div class="BigContainer">
 <Navbar />
 <v-row>
    <v-col v-for="ilan in items" :key="ilan.id" 
    :ilan="ilan"
    cols="12"
    sm="4"
    
    >
 <Ilan :ilan="ilan"/>
 </v-col>
  </v-row>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="15"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <Footer />
 </div>
</template>

<script>
import Ilan from "./Ilan.vue";
import items from "./data/items"
import Navbar from "./Navbar.vue"
import Footer from "./Footer.vue"
export default {
    props:["ilan"], 
    items:items,

    components:{
       Ilan,
       Navbar,
       Footer,
    },
    data(){
        return{
            items:items
        }
    }
}
</script>

<style>
.BigContainer{
    margin: 15px;
}

</style>