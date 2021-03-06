/* eslint-disable no-shadow, no-param-reassign */
import Vue from 'vue';
import axios from 'axios';
import router from '@/router';

const state = {
  questions: [],
  authorized: false,
  password: '',
  answers: {},
  loading: false,
  authUrl: null,
  logoUrl: null,
};

const mutations = {
  addQuestions(state, questions) {
    Vue.set(state, 'questions', questions);
  },
  setAuthorization(state, auth) {
    state.authorized = auth;
  },
  setAnswer: (state, payload) => {
    state.answers[payload.id] = payload.value;
  },
  setLoading: (state, loading) => {
    state.loading = loading;
  },
  setLogoUrl: (state, logoUrl) => {
    state.logoUrl = logoUrl;
  },
  setAuthUrl: (state, authUrl) => {
    state.authUrl = authUrl;
  },
};

const actions = {
  loadSurvey({ commit, state }, password) {
    commit('setLoading', true);
    axios.get(state.authUrl).then((response) => {
      if (response.data.authorized === true) {
        commit('addQuestions', response.data.questions);
        commit('setAuthorization', true);
        router.push({ path: 'survey' });
        commit('setLoading', false);
      } else {
        // TODO: Add error state
      }
    });
  },
  setupSurvey: ({ commit, dispatch }, surveyInfo) => {
    commit('setAuthUrl', surveyInfo.authUrl);
    commit('setLogoUrl', surveyInfo.logoUrl);
    commit('setLoading', false);
    if (!surveyInfo.auth) {
      dispatch('loadSurvey');
    }
  },
};

const getters = {
  authorized: state => state.authorized,
  questions: state => state.questions,
  answers: state => state.answers,
  logoUrl: state => state.logoUrl,
  loading: state => state.loading,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
