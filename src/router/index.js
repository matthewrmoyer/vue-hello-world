import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AssignmentOne from '@/components/AssignmentOne'
import Events from '@/components/Events'
import ComputedAndWatch from '@/components/ComputedAndWatch'
import Styling from '@/components/Styling'
import ConditionalsAndLists from '@/components/ConditionalsAndLists'
import SharingDataParent from '@/components/SharingDataParent'
import SharingDataChild from '@/components/SharingDataChild'
import SharingDataCallbacksParent from '@/components/SharingDataCallbacksParent'
import SharingDataCallbacksChild from '@/components/SharingDataCallbacksChild'







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
    },
    {
      path: '/styling',
      name: 'Styling',
      component: Styling
    },
    {
      path: '/conditionalsandlists',
      name: 'ConditionalsAndLists',
      component: ConditionalsAndLists
    },
    {
      path: '/sharingDataParent',
      name: 'SharingDataParent',
      component: SharingDataParent
    },
    {
      path: '/sharingDataChild',
      name: 'SharingDataChild',
      component: SharingDataChild
    },
    {
      path: '/sharingDataCallbacksParent',
      name: 'SharingDataCallbacksParent',
      component: SharingDataCallbacksParent
    },
    {
      path: '/sharingDataCallbacksChild',
      name: 'SharingDataCallbacksChild',
      component: SharingDataCallbacksChild
    }

  ]
})
