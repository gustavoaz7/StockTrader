import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './stocks.module';
import portfolio from './portfolio.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks,
    portfolio,
  },
});
