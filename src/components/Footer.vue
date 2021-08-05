<template>
  <v-footer
    dark
     bottom  padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="deep-purple darken-4 ">
        <strong >Genç yetenekler için açılan fırsat kapılarına ulaş!</strong>
        <v-spacer></v-spacer>
       <router-link color="white" to="/hakkimizda">
       <span color="wihite"> HAKKIMIZDA </span> <v-icon> keyboard_arrow_right</v-icon> 
        </router-link>
      
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>V01D</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>



</script>
<style scoped>
span{
    color:white;
}
a{
  text-decoration:none;
  color: white;
  border-bottom :1px solid white;
}


</style>