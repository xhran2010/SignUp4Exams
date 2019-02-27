import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Default from '@/components/Home/Default'
import Home from '@/components/Home/Home'
import Profile from '@/components/Home/Profile'
import SignUp from '@/components/Home/SignUp'
import MyExams from '@/components/Home/MyExams'
import adminLogin from '@/components/Admin/Login'
import adminHome from '@/components/Admin/Home/Home'

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
          path:'/home/profile',
          name:'Profile',
          component:Profile
        },
        {
          path:'/home/signup',
          name:'SignUp',
          component:SignUp
        },
        {
          path:'/home/myexams',
          name:'MyExams',
          component:MyExams
        },
      ]
    },
    {
      path:'/admin',
      name:'adminLogin',
      component:adminLogin,
    },
    {
      path:'/admin/home',
      name:'adminHome',
      component:adminHome
    }
  ]
})
