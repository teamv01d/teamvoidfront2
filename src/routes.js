
import IndividualLogin from './views/IndividualLogin.vue'
import Profile from './views/Profile'
import CompanyProfile from './views/CompanyProfile'
import AddAdvertisemnt from './views/AddAdvertisemnt'
import Application from './views/Application'
import AboutUs from './views/AboutUs'
import CompanyLogin from './views/CompanyLogin.vue'
import TestSolve from './views/TestSolve.vue'

export const routes = [
    {
        path: '/',
        name: 'IndividualLogin',
        component: IndividualLogin
    },
    {
        path:'/profile',
        name:'profile',
        component: Profile
      },
      {
        path:'/company/profile',
        name:'company',
        component: CompanyProfile
      },
      {
        path:'/advertisement',
        name:'advertisement',
        component: AddAdvertisemnt,
      },
      {
        path:'/application',
        name:'application',
        component:Application
      },
      {
        path:'/aboutus',
        name:'aboutus',
        component:AboutUs
      }
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