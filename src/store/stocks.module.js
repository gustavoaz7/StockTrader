import { fakeStocks } from '../fake-data/stocks';
import { BUY_STOCK, INIT_STOCKS, RANDOMIZE_STOCKS } from './actions.type';
import { SET_STOCKS, SET_RANDOM_STOCKS, SET_BOUGHT_STOCK } from './mutations.type';
import { GET_STOCKS } from './getters.type';

const stocksState = {
  stocks: [],
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SET_STOCKS](state, stocks) {
    state.stocks = stocks;
  },
  // [SET_RANDOM_STOCKS](state) {

  // },
};

const actions = {
  [BUY_STOCK]: (context, order) => {
    context.commit(SET_BOUGHT_STOCK, order);
  },
  [INIT_STOCKS]: (context) => {
    context.commit(SET_STOCKS, fakeStocks);
  },
  [RANDOMIZE_STOCKS]: (context) => {
    context.commit(SET_RANDOM_STOCKS);
  },
};

const getters = {
  [GET_STOCKS]: (state) => state.stocks,
};

export default {
  state: stocksState,
  mutations,
  actions,
  getters,
};
