import Vue from 'vue'
import Router from 'vue-router'
import groupRoomList from '@/pages/groupRoomList'
import groupSetting from '@/pages/groupSetting'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',redirect:'groupRoomList'},
    {
      path: '/groupRoomList',
      name: 'groupRoomList',
      component: groupRoomList
    },
    {
      path: '/groupSetting',
      name: 'groupSetting',
      component: groupSetting
    }
  ]
})
