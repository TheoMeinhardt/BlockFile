import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Portfolio from '../views/PortfolioView.vue';
import Welcome from '../views/WelcomeView.vue';

const routes = [
  { path: '/', name: 'Welcome', component: Welcome },
  { path: '/about', name: 'About', component: About },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/home', name: 'Home', component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
