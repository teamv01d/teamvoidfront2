
import IndividualLogin from './views/IndividualLogin.vue'
import CompanyLogin from './views/CompanyLogin.vue'
import TestSolve from './views/TestSolve.vue'
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
]