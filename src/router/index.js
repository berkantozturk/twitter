import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SigninView from '../views/SigninView.vue'
import AboutView from '../views/AboutView.vue'
import FirstView from '../views/FirstView.vue'
import LoginView from '../views/LoginView.vue'
import Settings from '../views/Settings.vue'
import ProfileView from '../views/ProfileView.vue'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const routes = [
  
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/signin',
    name: 'signin',
    component: SigninView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/',
    name: 'firstview',
    component: FirstView
  },
  {
    path: '/login',
    name: 'loginview',
    component: LoginView
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
