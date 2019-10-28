import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/manager/Layout.vue'
import Order from '../pages/manager/Order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'manager',
    component: Manager,
    children:[{
      path:"home",
      component:() => import('../pages/manager/Home.vue')
    },{
      path:"order",
      component:Order,
      children:[{
          path:"order_all",
          component:() => import('../pages/manager/order/Order_all.vue')
        },{
          path:"order_dpd",
          component:() => import('../pages/manager/order/Order_dpd.vue')
        },{
          path:"order_djd",
          component:() => import('../pages/manager/order/Order_djd.vue')
        },{
          path:"order_wfw",
          component:() => import('../pages/manager/order/Order_wfw.vue')
        }
      ]
    },{
      path:"user",
      component:() => import('../pages/manager/User.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../pages/Product.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
