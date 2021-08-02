<template>
   <div class="Container">
       <v-card 
       :elevation="8"
       max-height="700"
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

    <v-card-title>{{ilan.CompanyName}}</v-card-title>

    <v-card-text
    >
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        <span class="material-icons location-icon">
        room</span> •{{ilan.Location}}
      </div>

      <div >
      </div>
      <p>{{ilan.Desc.substring(0,95) + " " + ".."}}</p>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Gereksinimler</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>Java</v-chip>

        <v-chip>Python</v-chip>

        <v-chip>SQL</v-chip>

        <v-chip>NodeJs</v-chip>
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
        margin-top: 20px;
     }
}
 

}


</style>