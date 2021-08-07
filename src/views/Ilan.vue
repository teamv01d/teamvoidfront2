<template>
   <div class="Container">
       <v-card 
       :elevation="8"
       max-height="550"
       slot="cover"
      :loading="loading"
       class="mx-10 my-16 background-color"
       max-width="600"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      class="CompanyLogo"
      height="170"
      :src="require(`../assets/CompanyLogos/${ilan.CompanyLogo}`)"
    ></v-img>

    <v-card-title>{{ilan.Title}}</v-card-title>

    <v-card-text
    >
      <v-col
      align="start"
      class="mx-0 CompanyName"
      >
       <v-card-text>{{ilan.CompanyName}}</v-card-text>
      </v-col>

      <div class="my-4 text-subtitle-1">
        <span class="material-icons location-icon">
        room</span> •{{ilan.Location}}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Gereksinim</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>{{ilan.Gereksinim}}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        style="padding-top:0px"
        color="deep-purple lighten-2"
        text
        @click="reserve(ilan.id)"
      >
        Details
      </v-btn>
    </v-card-actions>
  </v-card>
   </div>
   
</template>
<script>
import items from "../views/data/items"
export default {
    props:["ilan"], 
    items:items,

    data(){
      return {
        items:items,
        loading:false
      };
    },
    methods:{
      reserve(id){
        this.$router.push({name: 'IlanDetail', params: {id : id}});
      }
   
      }
    }

</script>

<style lang="scss" scoped>
.Container{

        .CompanyLogo {
          border-radius: 8px;
        }
        
        .background-color {
        background: linear-gradient(to top right, #d1d4d4 -22%, #f5f4f7 82%);
        padding: 10px;

       .material-icons{
        margin-top: 0px;
     }
     .CompanyName{
       margin-top: 0;
       height: 2px;
     }
}
 

}


</style>