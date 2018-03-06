import Vue from 'vue';
import Vuex from 'vuex';
import survey from './modules/survey';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    survey,
  },
  strict: true,
});
