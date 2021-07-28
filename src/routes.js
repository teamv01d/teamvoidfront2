import IndividualLogin from './views/IndividualLogin.vue'
import Profile from './views/Profile'


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
]