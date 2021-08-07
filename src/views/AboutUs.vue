<template>
    <div class="  team">
         <Navbar />
         
         <v-parallax height="1000" :src="back" >
        <h1 class=" mt-10 hcolor text-center">HAKKIMIZDA</h1>
        <br><br>
        <p class=" textcolor text-center">
            TR Eğitim ve Teknoloji A.Ş. sorumluluğunda yürütülen 
            staj programı kapsamında oluşturulan Team V01D, ülkemiz gençlerinin
            yönelmek istedikleri alanlarda uygulamalı bir şekilde bilgi kazanmalarını
            sağlayacak stajlara ulaşmalarını sağlar.
            İlan veren şirketlerin oluşturabileceği interaktif yöntemlerle
            adayların seçimi kolaylaşır ve bu yöntem ile adayların yeterliliklerine
            göre kendilerine uygun stajyerler bulması sağlanır.
        </p>
        <v-container  >
         <v-row  >
             <v-col  v-for="person in team" :key="person.name">
                 <v-avatar size="200">
                        <img :src="person.avatar">
                    </v-avatar>
                    <h2> {{person.name}}</h2>
             </v-col>
         </v-row>
          <v-row justify="center" >
             <v-col v-for="person in team2" :key="person.name">
                 <v-avatar size="200">
                        <img :src="person.avatar2">
                    </v-avatar>
                    <h2> {{person.name2}}</h2>
             </v-col>
         </v-row>

        </v-container>
   
   
        
    
    </v-parallax>
        <Footer />

    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


export default {
    components:{
        Navbar,
        Footer,
    },
data(){
    return {
       team: [
        { name: 'Nisanur Çelik', role: 'Frontend Developer', avatar: '/nisa.jpg', color: 'black' },
        { name: 'Ekrem Can Deve', role: 'Backend Developer', avatar: '/can.jpg' },
        { name: 'Damla Dalgıç', role: 'Frontend Developer', avatar: '/damla.jpg' },
        { name: 'Samed Akgül', role: 'Backend Developer', avatar: 'samed.jpg' }
       ],
       team2: [
        { name2: 'Büşra Sönmez', role2: 'Database Developer', avatar2: '/nisa.jpg' },
        { name2: 'Harun Hesapcıoğlu', role2: 'Frontend Developer', avatar2: '/harun.jpg' },
        { name2: 'Nejan Kavşut', role2: 'Job Analyst', avatar2: '/nejan.jpg'},
       ],
       back:'/background1.jpg'
    }

}
}
</script>

<style>
.color {
    /* background: linear-gradient(to right, rgba(156, 167, 137, 1), rgb(150, 142, 173)); */
}
.textcolor {
    color: #454749;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}
.hcolor {
    color: #212425;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    font-size: 2rem;
}
h2{
     color: #212425;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
   
}
.inner{
    width: 50%;
    margin:0 auto;
}

</style>