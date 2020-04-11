<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>
<script>
import Stock from '../components/Stock.vue';
import { GET_STOCKS } from '../store/getters.type';

export default {
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters[GET_STOCKS];
    },
  },
};
</script>
