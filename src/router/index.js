import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BMapView from '../views/BMapView.vue'
import BMap2View from '../views/BMap2View.vue'
import LiquidfillView from '../views/LiquidfillView.vue';
import WordCloundView from '../views/WordCloundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bmap',
    name: 'bmap',
    component: BMapView
  },
  {
    path: '/bmap2',
    name: 'bmap2',
    component: BMap2View
  },
  {
    path: '/liquidfill',
    name: 'Liquidfill',
    component: LiquidfillView
  },
  {
    path: '/wordClound',
    name: 'WordCloundView',
    component: WordCloundView
  }
]

const router = new VueRouter({
  routes
})

export default router
