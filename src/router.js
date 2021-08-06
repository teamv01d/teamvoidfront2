import Vue from "vue";
import IndividualLogin from './views/IndividualLogin.vue'
import CompanyLogin from './views/CompanyLogin.vue'
import TestSolve from './views/TestSolve.vue'
import CompanyApplicants from './views/CompanyApplicants.vue'
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'IndividualLogin',
        component: IndividualLogin
    },
    {
        path: '/company',
        name: 'CompanyLogin',
        component: CompanyLogin
    },
    {
        path: '/testSolve',
        name: 'TestSolve',
        component: TestSolve
    },
    {
        path: '/companyApplicants',
        name: 'CompanyApplicants',
        component: CompanyApplicants
    },
    {
        path: '*',
        redirect: '/'
    }
];

export const router = new VueRouter({
    mode: "history",
    routes
});