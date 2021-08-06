<template>
  <div>
      <Navbar />
      <div v-if="currentItem !== null">
          <v-row class="banner">
          <v-img 
          :src="require(`../assets/CompanyLogos/${currentItem.CompanyLogo}`)" 
          class="CompanyLogo"
          >
          </v-img>
           <v-col class="text">
                 <p>Company Name : </p>
                 <p>Company Location : </p>
                 <p>Date : </p>
            </v-col>
            <v-col class="text">
          <p>{{currentItem.CompanyName}}</p>   
          <p>{{currentItem.Location}}</p>     
          <p>{{currentItem.Date}}</p>       
          </v-col>
          
          </v-row> 
          <div class="body">
            <v-row>
                <v-col>
            <v-card
            :elevation="8"
            max-height="400"
            min-height="300"
            min-width="400"
            max-width="400"
            slot="cover"
            :loading="loading"
            class="mx-10 my-16 background-color"
            > 
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>
            <v-card-title>
                <span class="material-icons">
                    info
                </span>
</v-card-title>
            <v-card-text
    >
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <div class="my-4 text-subtitle-2">
        •About Us
      </div>

      <div >
      </div>
      <p>{{currentItem.Desc}}</p>
    </v-card-text>
            </v-card>
            </v-col>
            <v-col>
            <v-card
            :elevation="8"
            max-height="400"
            min-height="300"
            min-width="400"
            max-width="400"
            slot="cover"
            :loading="loading"
            class="mx-10 my-16 background-color"
            > 
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>
            <v-card-title>
                <span class="material-icons">
                    place
                </span>
            </v-card-title>
            <v-card-text
    >
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <div class="my-4 text-subtitle-2">
        •Where We Located ?
      </div>
      <div >
      </div>
      <p>{{currentItem.Location}}</p>
    </v-card-text>
         </v-card>
         </v-col>
         <v-col>
            <v-card
            :elevation="8"
            max-height="400"
            min-height="300"
            min-width="400"
            max-width="400"
            slot="cover"
            :loading="loading"
            class="mx-10 my-16 background-color"
            > 
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>
            <v-card-title>
                <span class="material-icons">
                    call
                </span>
</v-card-title>
            <v-card-text
    >
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <div class="my-4 text-subtitle-2">
        •Contact Us
      </div>

      <div >
      </div>
      <v-row class="contact">
          <v-col class="contact-info">
              <h2>Tel:</h2>
              <h2>Mail:</h2>
          </v-col>
          <v-col>
              <div class="contacts">
              <h2>{{currentItem.Phone}}</h2>
              <h2>{{currentItem.Mail}}</h2>
              </div>
          </v-col>
      </v-row>
    </v-card-text>
        </v-card>
        </v-col>
            </v-row>
              <div class="text-center">
            <v-btn class="apply-btn"
            rounded
            color="green"
            dark
            >
            Apply
            </v-btn>
          </div>
          </div> 
      </div>
      
      <Footer />
  </div>
</template>

<script>
import items from './data/items';
import Navbar from "./Navbar.vue"
import Footer from "./Footer.vue"
export default {
    components:{
        Navbar,
        Footer,
    },
    data() {
        return {
            itemId: this.$route.params.id,
            currentItem: null
        }
    },
    beforeMount() {
        const id = Number(this.$route.params.id);
        this.currentItem = items.find(function(item) {
            return item.id === id
        })
        console.log(this.currentItem)
    }
}
</script>

<style scoped>
.banner{
    width: 100%;
    max-height: 400px;
    margin: 30px;
    padding-right: 50px;
    align-content: center;
    align-items: center;
    position: relative;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    display:flex;
    flex-direction: row;
    background: linear-gradient(to top right, #d1d4d4 -22%, #f5f4f7 82%);
}
.CompanyLogo{
    max-height: 400px;
    width: 80px;
    align-content: center;
    border-radius: 15%;
}
.background-color{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color:black;
    
   
}
 .text-subtitle-2{
        color: black;
    }
.body{
    align-content: center;
    align-items: center;
    width: 100%;
     
}
.text-center{
    margin: 15px;
}
.contact{
    align-items:center;
    margin: 15px;
    padding: 20px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;

}
.contacts{
    font-size: 10px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.material-icons{
    color: rgba(17, 75, 236, 0.9) 
    
}





</style>