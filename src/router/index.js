import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pokemon from '../views/Pokemon.vue'
import PkmList from '../components/PkmList.vue'
import Load from '../components/Load.vue'
import LoadNext from '../components/LoadNext.vue'
import LoadPrev from '../components/LoadPrev.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Load
    },
    {
      path: '/pokemon', 
      name: 'pokemon',
      component: PkmList
    },
    {
      path: '/next', 
      name: 'next',
      component: LoadNext
    },
    {
      path: '/previous', 
      name: 'previous',
      component: LoadPrev
    }
  ]
})

export default router
