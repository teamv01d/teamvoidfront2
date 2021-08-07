import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' 
import axios from  './plugins/axios'
import Router from 'vue-router'
import { routes } from './routes'


Vue.use(Router);
Vue.config.productionTip = false
const router = new Router({
  routes: routes,
});

new Vue({
  vuetify,
  axios,
  router,
  render: h => h(App)
}).$mount('#app')
