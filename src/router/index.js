import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/views/IndexView.vue'

import ContactMe from '@/views/ContactMe.vue'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const includPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return includPush.call(this, location).catch(err => err)
}

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      main: index
    },
    meta: {
      title: '首頁'
    }
  },
  {
    path: '/ContactMe',
    components: {
      main: ContactMe
    },
    meta: {
      title: '聯絡我'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 頁籤名稱
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
