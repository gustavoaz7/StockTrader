<template>
  <div class="container">
    <app-header />
    <div class="row">
      <div class="col-xs-12">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import { INIT_STOCKS } from './store/stocks/stocks.actions';

export default {
  name: 'App',
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch(INIT_STOCKS);
  },
};
</script>

<style>
</style>
