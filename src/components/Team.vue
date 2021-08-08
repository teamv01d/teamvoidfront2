<template>
  <div class="inner team">
    <h1 class="hcolor text-center">HAKKIMIZDA</h1>
    <br />
    <p class="textcolor text-center">
      TR Eğitim ve Teknoloji A.Ş. sorumluluğunda yürütülen staj programı
      kapsamında oluşturulan Team V01D, ülkemiz gençlerinin yönelmek istedikleri
      alanlarda uygulamalı bir şekilde bilgi kazanmalarını sağlayacak stajlara
      ulaşmalarını sağlar. İlan veren şirketlerin oluşturabileceği interaktif
      yöntemlerle adayların seçimi kolaylaşır ve bu yöntem ile adayların
      yeterliliklerine göre kendilerine uygun stajyerler bulması sağlanır.
    </p>

    <v-container fluid>
      <v-container
        style="height: 100%"
        row
        wrap
        class="justify-center text-center"
      >
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-avatar size="200">
            <img :src="person.avatar" />
          </v-avatar>

          <v-card-text>
            <div>
              <strong class="black--text text--lighten-1">{{
                person.name
              }}</strong>
            </div>
            <div class="black--text">{{ person.role }}</div>
          </v-card-text>
        </v-flex>
      </v-container>

      <v-container
        style="height: 100%"
        row
        wrap
        class="justify-center text-center"
      >
        <v-flex xs12 sm6 md4 lg3 v-for="person in team2" :key="person.name2">
          <v-avatar size="200">
            <img :src="person.avatar2" />
          </v-avatar>

          <v-card-text>
            <div>
              <strong class="black--text text--lighten-1">{{
                person.name2
              }}</strong>
            </div>
            <div class="black--text">{{ person.role2 }}</div>
          </v-card-text>
        </v-flex>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Nisa Nur Çelik",
          role: "Frontend Developer",
          avatar: "nisa.jpg",
          color: "black",
        },
        {
          name: "Ekrem Can Deve",
          role: "Backend Developer",
          avatar: "can.jpg",
        },
        {
          name: "Damla Dalgıç",
          role: "Frontend Developer",
          avatar: "damla.jpg",
        },
        {
          name: "Samed Akgül",
          role: "Backend Developer",
          avatar: "samed.jpg",
        },
      ],
      team2: [
        {
          name2: "Büşra Sönmez",
          role2: "Database Developer",
          avatar2: "busra.jpg",
        },
        {
          name2: "Harun Hesapcıoğlu",
          role2: "Frontend Developer",
          avatar2: "harun.jpg",
        },
        {
          name2: "Nejan Kavşut",
          role2: "Job Analyst",
          avatar2: "nejan.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.color {
  background: linear-gradient(
    to right,
    rgba(156, 167, 137, 1),
    rgb(150, 142, 173)
  );
}
.textcolor {
  color: #454749;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}
.hcolor {
  color: #212425;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  font-size: 2rem;
}
.conto {
  min-height: 100%;
}
.inner {
  width: 50%;
  margin: 0 auto;
}
</style>