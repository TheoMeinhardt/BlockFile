import { createApp } from 'vue';
import { createPinia } from 'pinia';

import VueSmoothScroll from 'vue3-smooth-scroll';
import App from './App.vue';
import router from './router';

import 'axios';
import './index.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueSmoothScroll, {
  updateHistory: false,
  duration: 200,
  offset: -17,
});

app.mount('#app');
