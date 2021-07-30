<template>
    <nav>
       
       <v-toolbar class="renk" app height="90" >
           <v-toolbar-title  class="font-weight-bold white--text ml-3">
             
             <img  class="mr-2 mt-5" height="50px" :src="avatar" alt="" />
             <p class="ml-1">V01D</p>

           </v-toolbar-title>
           <v-spacer></v-spacer>
            <router-link to="/profile" tag="v-btn">
            <v-btn color="white" class="mr-2 white" flat value="profile" >
           <span>Profil</span>  <v-icon right >person</v-icon>
           </v-btn>
          </router-link>
          <router-link to="/ilanlar" tag="v-btn">
            <v-btn color="white" class="mr-2 white" flat value="profile" >
           <span > İlanlar</span>  <v-icon right>library_books</v-icon> 
           </v-btn>
          </router-link>
          <router-link to="/basvurularim" tag="v-btn">
            <v-btn color="white" class="mr-2 white" flat value="profile" >
           <span >Başvurularım</span> <v-icon right>call_made</v-icon> 
           </v-btn>
          </router-link>
           <router-link to="/logout" tag="v-btn">
            <v-btn color="white" class="mr-2 white" flat value="profile" >
           <span >Çıkış</span> <v-icon right>logout</v-icon> 
           </v-btn>
          </router-link>
        
          
       
         
         
        
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