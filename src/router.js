import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Ranking from './views/Ranking.vue'
import Search from './views/Search.vue'

Vue.use(Router)

  const routes = [
      {path: '/',name: 'home',component: Home},
      {path: '/ranking',name: 'ranking',component: Ranking},
      {path: '/search',name: 'search',component: Search}
  ]
const router = new Router({
    routes
})

export default router