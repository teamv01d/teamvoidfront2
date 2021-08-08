import Vue from "vue";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/",

});
axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

Vue.prototype.$axios = axiosInstance;