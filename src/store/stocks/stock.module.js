import { fakeStocks } from '../../fake-data/stocks';
import { BUY_STOCK, INIT_STOCKS, RANDOMIZE_STOCKS } from './stocks.actions';
import { SET_STOCKS, RANDOM_STOCKS } from './stocks.mutations';
import { STOCKS } from './stocks.getters';

const stocksState = {
  stocks: [],
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SET_STOCKS](state, stocks) {
    state.stocks = stocks;
  },
  // [RANDOM_STOCKS](state) {

  // },
};

const actions = {
  [BUY_STOCK]: (context) => {
    context.commit();
  },
  [INIT_STOCKS]: (context) => {
    context.commit(SET_STOCKS, fakeStocks);
  },
  [RANDOMIZE_STOCKS]: (context) => {
    context.commit(RANDOM_STOCKS);
  },
};

const getters = {
  [STOCKS]: (state) => state.stocks,
};

export default {
  state: stocksState,
  mutations,
  actions,
  getters,
};
