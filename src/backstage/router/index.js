import Vue from 'vue'
// import { bus } from "../util"
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/backstage/components/Home'
//import User from '@/backstage/components/User'
const EditUserInfo = () => import('@/backstage/components/content/EditUserInfo')
const EditPro = () => import('@/backstage/components/content/EditPro')
const EditProNext = () => import('@/backstage/components/content/EditProNext')
const EditDesigner = () => import('@/backstage/components/content/EditDesigner')
const EditBaseInfo = () => import('@/backstage/components/content/EditBaseInfo')



Vue.use(Router)

// console.log(bus);
// <router-link to="/index">首页</router-link>
// <router-link to="/professionType">专业领域</router-link>
// <router-link to="/designHouse">设计所</router-link>
// <router-link to="/activitiesSalon">活动沙龙</router-link>
// <router-link to="/companyNews">公司新闻</router-link>
// <router-link to="/CompanySite">公司官网</router-link>
const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/editUserInfo',
      name: 'editUserInfo',
      component: EditUserInfo
    },
    {
      path: '/editPro',
      name: 'editPro',
      component: EditPro
    },
    {
      path: '/editProNext',
      name: 'editProNext',
      component: EditProNext
    },
    {
      path: '/editDesigner',
      name: 'editDesigner',
      component: EditDesigner
    },
    {
      path: '/editBaseInfo',
      name: 'editBaseInfo',
      component: EditBaseInfo
    },

  ]
})

// router.beforeEach((to, from, next) => {
//   bus.$emit('navChange', to.name);
//   next();
// });

export default router;