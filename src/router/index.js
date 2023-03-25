import { createRouter, createWebHistory } from 'vue-router'
import Pokemon from '../views/Pokemon.vue'
import PkmList from '../components/PkmList.vue'
import Load from '../components/Load.vue'
import LoadNext from '../components/LoadNext.vue'
import LoadPrev from '../components/LoadPrev.vue'
import LoadPkm from '../components/LoadPkm.vue'

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
      path: '/pokemon/details', 
      name: 'details',
      component: Pokemon
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
    },
    {
      path: '/loadpkm', 
      name: 'loadpkm',
      component: LoadPkm
    }
  ]
})

export default router
