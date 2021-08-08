<template>
 <div>
 <Navbar />
 <div class="BigContainer">
 <v-row>
    <v-col v-for="ilan in companies" :key="ilan.id" 
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
 </div>
</template>

<script>
import Ilan from "./Ilan.vue";
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import endpoint from "../lib/api";

export default {
    props:["ilan"], 
    components:{
       Ilan,
       Navbar,
       Footer,
    },
    data(){
        return{
            companies: []
        }
    },
    methods: {
      getAll() {
        this.$axios
          .get(endpoint.advertisement.get)
          .then((response) => {
            console.log(response)
            this.companies = response.data;
          })
          .catch((e) => console.log(e));
      },
    },
    beforeMount() {
      this.getAll()
    }
}
</script>

<style>
.BigContainer{
   
}

</style>