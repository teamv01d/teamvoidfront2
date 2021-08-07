<template>
    <nav>
       
       <v-toolbar class="renk" app height="80" >
           <v-toolbar-title  class="font-weight-bold white--text ml-3">
             
             <img  class="mr-2" height="70px" :src="require(`../assets/${avatar}`)" alt="">
            V01D
         
           </v-toolbar-title>
           <v-spacer></v-spacer>
            <router-link to="/company" tag="v-btn">
            <v-btn color="white" class="mr-2 white" flat value="company" >
           <span>Profil</span>  <v-icon right >person</v-icon>
           </v-btn>
          </router-link>
          <router-link to="/ilanekle" tag="v-btn">
            <v-btn color="white" class="mr-2 white" flat value="profile" >
           <span > İlan Ekle</span>  <v-icon right>add</v-icon> 
           </v-btn>
          </router-link>
          <router-link to="/ilanlarim" tag="v-btn">
            <v-btn color="white" class="mr-2 white" flat value="profile" >
           <span > İlanlarım</span>  <v-icon right>library_books</v-icon> 
           </v-btn>
          </router-link>
          <router-link to="/basvurular" tag="v-btn">
            <v-btn color="white" class="mr-2 white" flat value="profile" >
           <span >Başvurular</span> <v-icon right>call_made</v-icon> 
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
      avatar:"logo.png"
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