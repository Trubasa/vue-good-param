import Vue from 'vue'
import App from './App.vue'
import plugins from './plugin'

/*引入element-ui*/
import 'element-ui/lib/theme-chalk/index.css'
import elementUI from 'element-ui'
Vue.use(elementUI)

Vue.use(plugins);
var vueApp=new Vue({
  el: '#app',
  render: h => h(App)
})
window.vueApp=vueApp
