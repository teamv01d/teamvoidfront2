<template>
 <div>
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
  <Footer />
 </div>
</template>

<script>
import Ilan from "../views/Ilan.vue"
import items from "../views/data/items"
import Navbar from "../views/Navbar.vue"
import Footer from "../views/Footer.vue"
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

</style>