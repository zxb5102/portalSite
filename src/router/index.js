import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/content/Index'
import ProfessionType from '@/components/content/ProfessionType'
import DesignHouse from '@/components/content/DesignHouse'
import ActivitiesSalon from '@/components/content/ActivitiesSalon'
import CompanyNews from '@/components/content/CompanyNews'
import CompanySite from '@/components/content/CompanySite'

Vue.use(Router)

// <router-link to="/index">首页</router-link>
// <router-link to="/professionType">专业领域</router-link>
// <router-link to="/designHouse">设计所</router-link>
// <router-link to="/activitiesSalon">活动沙龙</router-link>
// <router-link to="/companyNews">公司新闻</router-link>
// <router-link to="/CompanySite">公司官网</router-link>
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'Index',
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
      path: '/companySite',
      name: 'companySite',
      component: CompanySite
    }
  ]
})
