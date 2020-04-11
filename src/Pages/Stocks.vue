<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>
<script>
import Stock from '../components/Stock.vue';
import { STOCKS } from '../store/stocks/stocks.getters';

export default {
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters[STOCKS];
    },
  },
};
</script>
