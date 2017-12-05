import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AssignmentOne from '@/components/AssignmentOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/assignments/1',
      name: 'AssignmentOne',
      component: AssignmentOne
    }
  ]
})
