import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AssignmentOne from '@/components/AssignmentOne'
import Events from '@/components/Events'
import ComputedAndWatch from '@/components/ComputedAndWatch'


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
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/computedandwatch',
      name: 'ComputedAndWatch',
      component: ComputedAndWatch
    }

  ]
})
