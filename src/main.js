import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios  from 'axios'

Vue.use(VueAxios,axios)

Vue.config.productionTip = false

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000

axios.interceptors.response.use = function(response){
  let res = response.data
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
}
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
