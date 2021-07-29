import IndividualLogin from './views/IndividualLogin.vue'
import Profile from './views/Profile'
import CompanyProfile from './views/CompanyProfile'


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
        path:'/company',
        name:'company',
        component: CompanyProfile
      },

]