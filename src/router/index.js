import Vue from 'vue'
import VueRouter from 'vue-router'
import FAB from '../components/FloatingActionButton.vue'
import Position from '../components/Position.vue'
import SpeedDial from '../components/SpeedDial.vue'
import Linear from '../components/Linear.vue'
import Radial from '../components/Radial.vue'
import Skeleton from '../components/Skeleton.vue'
import Effect from '../components/Effect.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: FAB },
  { path: '/position', component: Position },
  { path: '/speeddial', component: SpeedDial },
  { path: '/linear', component: Linear },
  { path: '/radial', component: Radial },
  { path: '/skeleton', component: Skeleton },
  { path: '/effect', component: Effect }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
