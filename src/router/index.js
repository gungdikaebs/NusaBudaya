import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventDetailView from '../views/EventDetailView.vue'
import TraditionsView from '../views/TraditionsView.vue'
import TraditionDetailView from '../views/TraditionDetailView.vue'
import CalendarView from '../views/CalendarView.vue'
import HelpView from '../views/HelpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/event/:id',
      name: 'event-detail',
      component: EventDetailView
    },
    {
      path: '/traditions',
      name: 'traditions',
      component: TraditionsView
    },
    {
      path: '/tradition/:id',
      name: 'tradition-detail',
      component: TraditionDetailView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/help',
      name: 'help',
      component: HelpView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
