<template>
  <div id="app">
    <Index />
  </div>
</template>
<script>
import Index from './views/index.vue';

export default {
  name: 'App',
  components: {
    Index,
  },
};
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
