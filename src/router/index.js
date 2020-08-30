import Vue from 'vue'
import Router from 'vue-router'
import login from  '@/views/login.vue'
import home from  '@/views/home.vue'
import index from  '@/views/index.vue'
import dynamic from  '@/views/dynamic.vue'
import mine from  '@/views/mine.vue'
import firstLevelList from  '@/views/firstLevelList.vue'
import secondLevelList from  '@/views/secondLevelList.vue'
import searchList from  '@/views/searchList.vue'
import articleDetails from  '@/views/articleDetails.vue'
import search from  '@/views/search.vue'
import changePassword from  '@/views/changePassword.vue'
import auth from  '@/views/auth.vue'
import dynamicUpdate from  '@/views/dynamicUpdate.vue'
import preview from  '@/views/preview.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/auth'
    },
    {
      path:'/auth',
      component: auth,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      // meta: {
      //   keepAlive: true
      // },
      children:[
        {
          path: '/index',
          name: 'index',
          component: index,
          // meta: {
          //   keepAlive: false
          // }
        },
        {
          path: '/dynamic',
          name: 'dynamic',
          component: dynamic,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/mine',
          name: 'mine',
          component: mine,
          // meta: {
          //   keepAlive: false
          // }
        },
      ]
    },
    {
      path: '/firstLevelList',
      name: 'firstLevelList',
      component: firstLevelList,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/secondLevelList',
      name: 'secondLevelList',
      component: secondLevelList,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/searchList',
      name: 'searchList',
      component: searchList,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/articleDetails',
      name: 'articleDetails',
      component: articleDetails,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      // meta: {
      //   keepAlive: false
      // }
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: changePassword,
      // meta: {
      //   keepAlive: falloginse
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      // meta: {
      //   keepAlive: false
      // }
    },

    {
      path: '/dynamicUpdate',
      name: 'dynamicUpdate',
      component: dynamicUpdate,
      // meta: {
      //   keepAlive: false
      // }
    },
    {
      path: '/preview',
      name: 'preview',
      component: preview,
    },

  ]
})
