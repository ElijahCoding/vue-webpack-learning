<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>
  import Counter from './app/Counter.vue'

  export default {
    name: 'app',
    components: {
      Counter
    }
  }
</script>

<style lang="scss">
  @import './assets/styles/app.scss';

</style>
