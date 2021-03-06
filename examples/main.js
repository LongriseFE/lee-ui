// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import codeBlock from './components/code-block.vue'
import LeeUI from '../packages/index'
import '../packages/theme-default/lib/index.css'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
Vue.component('demo-block', demoBlock)
Vue.component('code-block', codeBlock)
Vue.use(LeeUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
