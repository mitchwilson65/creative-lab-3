import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Employees from '../views/Employees.vue'
import Colors from '../views/Colors.vue'
import Numbers from '../views/Numbers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/colors',
    name: 'Colors',
    component: Colors
  },
  {
    path: '/numbers',
    name: 'Numbers',
    component: Numbers
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
