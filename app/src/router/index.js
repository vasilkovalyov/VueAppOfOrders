import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Orders from '../views/Orders.vue'
import AddOrder from '../views/AddOrder.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	  { path: '', name: 'home', component: Home },
	  { path: '/about', name: 'about', component: About },
	  { path: '/orders', name: 'orders', component: Orders },
	  { path: '/addorder', name: 'addorder', component: AddOrder },
	  { path: '/*', name: 'notfound', component: NotFound }
  ]
})

export default router
