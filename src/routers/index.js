import Vue from 'vue';
import VueRouter from 'vue-router'
import login from "../components/login"
import index from "../components/index"

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    //login page
    {
      path:'/login',
      component:login,
      name:'login'
    },

    {
      path:'/',
      component: index,
      name:'index'
    }
  ]
})
