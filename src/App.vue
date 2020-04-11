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

export default {
  name: 'App',
  components: {
    appHeader: Header,
  },
};
</script>

<style>
</style>
