import Vue from 'vue'
import Backstage from './Backstage'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './index.css'
// import 'element-ui/lib/theme-chalk/display.css';
// import IScrollView from 'vue-iscroll-view';

Vue.config.productionTip = false
// Vue.use(ElementUI);
// Vue.use(IScrollView, IScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Backstage },
  template: '<backstage/>'
})