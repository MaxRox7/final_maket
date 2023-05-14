import Vue from 'vue'
import VueRouter from 'vue-router'
import mainpage from '../views/mainpage.vue'
import stone_island from '../views/stone_island.vue'
import shoppingCart from '../views/shoppingCart.vue'
import shoppingCartfull from '../views/shoppingCartfull.vue'
Vue.use(VueRouter)

const routes = [ {
path: '/',
name: 'main',
component: mainpage
},
{
path: '/stone_island',
name: 'fear',
component: stone_island
},
{
  path: '/shoppingcart',
  name: 'shop',
  component: shoppingCart
  },
  {
  path: '/shoppingcartfull',
  name: 'shopp',
  component: shoppingCartfull
  },
]


const router = new VueRouter({
  routes
})

export default router
