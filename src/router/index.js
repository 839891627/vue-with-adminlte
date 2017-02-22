import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import User from '../views/user/User.vue'
import Plant from '../views/plant/plant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [{
        path: 'user',
        name: 'user',
        component: User
      },{
        path: 'plant',
        name: 'plant',
        component: Plant
      }]
    }
  ]
})
