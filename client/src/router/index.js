import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Default from '@/components/Home/Default'
import Home from '@/components/Home/Home'
import Profile from '@/components/Me/Profile'
import ChangePwd from '@/components/Me/ChangePwd'
import SignUp from '@/components/SignUp'
import Payment from '@/components/Payment'
import Scores from '@/components/Scores'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
      children:[
        {
          path:'/home/default',
          name:'Default',
          component:Default
        },
        {
          path:'/home/me/profile',
          name:'Profile',
          component:Profile
        },
        {
          path:'/home/me/changepwd',
          name:'ChangePwd',
          component:ChangePwd
        },
        {
          path:'/home/signup',
          name:'SignUp',
          component:SignUp
        },
        {
          path:'/home/payment',
          name:'Payment',
          component:Payment
        },
        {
          path:'/home/scores',
          name:'Scores',
          component:Scores
        }
      ]
    }
  ]
})
