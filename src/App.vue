<template>
  <div id="app">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-layout-row md-size-100">
        <img v-bind:src="logoUrl">
      </div>
      <div class="md-layout-item md-size-15">
      </div>
      <div class="md-layout-item md-layout-row md-size-70">
        <div class="md-layout-item">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data() {
    return { logoPath: 'yo/yo' };
  },
  computed: {
    ...mapGetters(['logoUrl']),
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
