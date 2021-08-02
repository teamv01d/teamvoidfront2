import IndividualLogin from './views/IndividualLogin.vue'
import Profile from './views/Profile'
import CompanyProfile from './views/CompanyProfile'
import AddAdvertisemnt from './views/AddAdvertisemnt'


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
      {
        path:'/advertisement',
        name:'advertisement',
        component: AddAdvertisemnt
      },

]