import Vue from 'vue'
// import { bus } from "../util"
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/backstage/components/Home'
import User from '@/backstage/components/User'

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
        path: '/user',
        name: 'User',
        component:User 
        },
]
})

// router.beforeEach((to, from, next) => {
//   bus.$emit('navChange', to.name);
//   next();
// });

export default router;