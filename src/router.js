import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/home';
import Index from './pages/index';
import Product from './pages/product';
import Detail from './pages/detail';
import Cart from './pages/cart';
import Order from './pages/order';
import OrderList from './pages/orderList';
import OrderPay from './pages/orderPay';
import OrderConfirm from './pages/orderConfirm';
import Login from './pages/login';
import AliPay from './pages/alipay';
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
          path: '/product/:id',
          name: 'product',
          component: Product
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children:[
        {
          path: 'list',
          name: 'order-list',
          component: OrderList
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          component: OrderConfirm
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: OrderPay
        },
        {
          path:'alipay',
          name: 'alipay',
          component: AliPay
        }
      ]
    }
  ]
})