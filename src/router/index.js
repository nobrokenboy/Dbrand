import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
/*组件*/
// import dHeader from '/components/header/header';
/*页面*/
import home from '@/pages/home/home';
import demo from '@/pages/example/example.vue';
Vue.use(Router)

export default new Router({
  routes: [
   /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
