
import Vue from "vue";
import VueRouter from "vue-router";
import IndividualLogin from './views/IndividualLogin.vue'
import CompanyLogin from './views/CompanyLogin.vue'
import TestSolve from './views/TestSolve.vue'
import Ilanlar from './views/Ilanlar.vue'
import IlanDetail from './views/IlanDetails.vue'
Vue.use(VueRouter);

export const routes = [
    {
        path: '/login',
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
        path: '/ilanlar',
        name: 'Ilanlar',
        component: Ilanlar,
        meta: {
            title: 'Ilanlar'
        }
    },
    {
        path: '/ilanlar/:id',
        name: 'IlanDetail',
        component: IlanDetail,
        meta: {
            title: 'Ilan Detail'
        }
    },
];
