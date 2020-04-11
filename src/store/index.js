import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './stocks/stock.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks,
  },
});
