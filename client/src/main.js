import { createApp } from 'vue';
import { createPinia } from 'pinia';

import VueSmoothScroll from 'vue3-smooth-scroll';
import App from './App.vue';
import router from './router';
import piniaPersist from 'pinia-plugin-persist';

import 'axios';
import './index.css';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);

app.use(pinia);
app.use(router);
app.use(VueSmoothScroll, {
  updateHistory: false,
  duration: 200,
  offset: -17,
});

app.mount('#app');
