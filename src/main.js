import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios  from 'axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
//import env from './env'
Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad,{
  loading:'/img/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000
//axios.defaults.baseURL = env.baseURL

axios.interceptors.response.use = function(response){
  let res = response.data
  let path = location.hash
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    if(path !== '#/index'){
      window.location.href = '/#/login'
    }
    
  }else{
    alert(res.msg)
    return Promise.reject(res);
  }
}
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
