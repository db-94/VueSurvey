// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import axios from 'axios';

Vue.use(VueMaterial);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  mounted: () => {
    store.commit('setLoading', true);
    axios.get('https://survey.becca-calvert.com/app-info', {
      responseType: 'json',
      withCredentials: false,
    }).then((result) => {
      store.dispatch('setupSurvey', result.data);
    }).catch((error) => {
      // alert(error);
    });
  },
});
