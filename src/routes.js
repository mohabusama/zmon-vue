import Home from './components/Home.vue'
import Dashboard from './components/dashboard/Dashboard.vue'


export default [
  {
    path: '/', name: 'home', component: Home
  },
  {
    path: '/dashboard', name: 'dashboard', component: Dashboard
  }
]
