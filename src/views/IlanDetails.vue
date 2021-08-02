<template>
  <div>
      <Navbar />
      <div v-if="currentItem !== null">
          {{ currentItem.CompanyName }}
      </div>
      <p>{{currentItem.Location}}</p>
      <Footer />
  </div>
</template>

<script>
import items from '../views/data/items';
import Navbar from "../views/Navbar.vue"
import Footer from "../views/Footer.vue"
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

<style>

</style>