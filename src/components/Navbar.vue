<template>
    <nav>
       
       <v-toolbar class="renk" app height="80" >
           <v-toolbar-title  class="font-weight-bold white--text ml-3">
             
             <img  class="mr-2" height="70px" :src="avatar" alt="">
            V01D
             
           

             
               
               
           </v-toolbar-title>
           <v-spacer></v-spacer>
           <v-btn flat class="mr-2 white">
             <span > Profil</span> <v-icon right >person</v-icon> 
           </v-btn >
           <v-btn  class="mr-2 white" flat>
             <span > İlanlar</span> <v-icon right>library_books</v-icon> 
           </v-btn>
           <v-btn class="mr-2 white" flat>
             <span >Başvurular</span> <v-icon right>call_made</v-icon> 
           </v-btn>
           <v-btn class="mr-2 white" flat>
             <span >Çıkış</span> <v-icon right>logout</v-icon> 
           </v-btn>
       </v-toolbar>
    </nav>
</template>
<script>
export default{
  data(){
    return{
      avatar: '/mylogo.png'
    }
  }
}
</script>
<style scoped>
.renk{
   background: linear-gradient(to top right, #02c3bd -22%, #533a71 82%);
}
.buton{
  background-color: #02c3bd;
}

</style>