<template>
  <div>
    <appStock v-for="stock in stocks" :key="stock.id" :stock="stock" is-portfolio />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { GET_PORTFOLIO_STOCKS } from '../store/getters.type';
import Stock from '../components/Stock.vue';

export default {
  components: {
    appStock: Stock,
  },
  computed: {
    ...mapGetters({
      stocks: GET_PORTFOLIO_STOCKS,
    }),
  },
};
</script>
