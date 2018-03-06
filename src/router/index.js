import Vue from 'vue'
import { bus } from "../util"
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/content/Index'
import ProfessionType from '@/components/content/ProfessionType'
import DesignHouse from '@/components/content/DesignHouse'
import ActivitiesSalon from '@/components/content/ActivitiesSalon'
import CompanyNews from '@/components/content/CompanyNews'
import CompanySite from '@/components/content/CompanySite'
import Login from '@/components/content/Login'

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
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/professionType',
      name: 'professionType',
      component: ProfessionType
    },
    {
      path: '/designHouse',
      name: 'designHouse',
      component: DesignHouse
    },
    {
      path: '/activitiesSalon',
      name: 'activitiesSalon',
      component: ActivitiesSalon
    },
    {
      path: '/companyNews',
      name: 'companyNews',
      component: CompanyNews
    },
    {
      path: '/login',
      name: 'login',
      component:Login 
    },
    {
      path: '/companySite',
      name: 'companySite',
      component: CompanySite
    }
  ]
})

router.beforeEach((to, from, next) => {
  // bus.$emit('navChange', to.name);
  next();
});

export default router;