import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Welcome from '../views/WelcomeView.vue';
import Login from '../views/LoginView.vue';
import Registration from '../views/RegistrationView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Registration',
      component: Registration,
    },
  ],
});

export default router;
