
import IndividualLogin from './views/IndividualLogin.vue'
import CompanyLogin from './views/CompanyLogin.vue'
import TestSolve from './views/TestSolve.vue'
import Ilanlar from "./views/Ilanlar.vue"
import IlanDetail from "./views/IlanDetails.vue"
export const routes = [
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
        path: "/ilanlar/:id",
        name: "IlanDetail",
        component: IlanDetail,
        meta: {
            title: 'Ilan Detail'
        }
    },
    {
        path: "/ilanlar",
        name: "Ilanlar",
        component: Ilanlar,
        meta: {
            title: 'Ilanlar'
        }
    },
]