import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: r => require.ensure([], () => r(require('../docs/home.md')))
    },
    {
      path: '/button',
      name: 'button',
      component: r => require.ensure([], () => r(require('../docs/button.md')))
    },
    {
      path: '/layout',
      name: 'layout',
      component: r => require.ensure([], () => r(require('../docs/layout.md')))
    },
    {
      path: '/icon',
      name: 'icon',
      component: r => require.ensure([], () => r(require('../docs/icon.md')))
    },
    {
      path: '/radio',
      name: 'radio',
      component: r => require.ensure([], () => r(require('../docs/radio.md')))
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: r => require.ensure([], () => r(require('../docs/checkbox.md')))
    }
  ]
})
