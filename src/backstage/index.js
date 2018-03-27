import Vue from 'vue'
import Backstage from './Backstage'
 import ElementUI from 'element-ui'
 import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './index.css'
 import 'element-ui/lib/theme-chalk/display.css';
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.css'
// import 'vue-material/dist/theme/default-dark.css' 
// import 'vue-material/dist/vue-material.min.css'

// import IScrollView from 'vue-iscroll-view';
// import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mint-ui/lib/style.min.css'


Vue.use(BootstrapVue);

Vue.config.productionTip = false
// Vue.use(VueMaterial);
 Vue.use(ElementUI);
// Vue.use(IScrollView, IScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Backstage },
  template: '<backstage/>'
})