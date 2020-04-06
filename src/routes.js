import Home from './Pages/Home.vue';
import Stocks from './Pages/Stocks.vue';
import Portfolio from './Pages/Portfolio.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/stocks', component: Stocks },
  { path: '/portfolio', component: Portfolio },
];
