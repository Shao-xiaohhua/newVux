// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import HomeTwo from './components/Hello'
import Index from './components/index'

VueRouter.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Index
    }, {
      path: '/hometwo',
      name: 'two',
      component: HomeTwo
    }]
  }
]

const router = new VueRouter({
  routes
})

// 路由状态发起时
router.beforeEach(function (to, from, next) {
  console.log('发起')
  next()
  VueRouter.isBack = false
})

router.afterEach(function (to) {
  console.log('结束')
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
