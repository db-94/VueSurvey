/* eslint max-len: ["error", { "code": 110 }]*/
<template>
  <div>
    <form novalidate class="md-layout md-gutter">
      <md-card class="md-layout-item md-size-100 md-elevation-20">
        <md-card-content>
          <div class="md-layout-row md-layout-wrap md-gutter">
            <div class="md-flex md-flex-small-100">
              <md-field>
                <label for="survey">Survey Name</label>
                <md-input name="survey" id="survey" v-model="survey" :disabled="loading"/>
              </md-field>
              <md-button class="md-raised md-primary" v-on:click="loadSurvey(survey)">Enter</md-button>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Lander',
  data() {
    return {
      survey: '',
    };
  },
  methods: {
    ...mapActions(['loadSurvey']),
  },
  computed: {
    ...mapGetters(['loading']),
  },
};
</script>
