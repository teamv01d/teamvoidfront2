<template>
  <div>
    <app-navbar />

    <div class="ma-12 ml-16 mr-16">
      <v-expansion-panels class="mb-6">
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header disable-icon-rotate>
            Item
            <template v-slot:actions>
              <v-icon color="green"> mdi-check </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <app-footer />
  </div>
</template>


<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    appFooter: Footer,
    appNavbar: Navbar,
  },
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
};
</script>