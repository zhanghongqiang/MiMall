import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/home';
import Index from './pages/index';
import Product from './pages/product';
import Detail from './pages/detail';
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/product',
          name: 'product',
          component: Product
        },
        {
          path: '/detail',
          name: 'detail',
          component: Detail
        }
      ]
    }
  ]
})