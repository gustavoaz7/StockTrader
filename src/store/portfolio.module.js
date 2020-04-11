import { SELL_STOCK } from './actions.type';
import { GET_STOCKS, GET_PORTFOLIO_STOCKS, GET_FUNDS } from './getters.type';
import { SET_BOUGHT_STOCK, SET_SOLD_STOCK } from './mutations.type';

const initialState = {
  funds: 10000,
  stocks: [],
};

const portfolioState = { ...initialState };

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SET_BOUGHT_STOCK](state, { id, price, quantity }) {
    const record = state.stocks.find((stock) => stock.id === id);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({ id, quantity });
    }
    state.funds -= price * quantity;
  },
  [SET_SOLD_STOCK](state, { id, price, quantity }) {
    const record = state.stocks.find((stock) => stock.id === id);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += price * quantity;
  },
};

const actions = {
  [SELL_STOCK](context, order) {
    context.commit(SET_SOLD_STOCK, order);
  },
};

const getters = {
  [GET_PORTFOLIO_STOCKS](state, storeGetters) {
    return state.stocks.map((portfolioStock) => {
      const record = storeGetters[GET_STOCKS].find((stock) => stock.id === portfolioStock.id);
      return {
        id: portfolioStock.id,
        quantity: portfolioStock.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  [GET_FUNDS](state) {
    return state.funds;
  },
};

export default {
  state: portfolioState,
  mutations,
  actions,
  getters,
};
