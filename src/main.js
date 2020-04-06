import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';


Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
