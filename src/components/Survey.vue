<template>
  <div>
    <form novalidate class="md-layout md-gutter">
      <md-card class="md-layout-item md-size-100 md-elevation-20">
        <md-card-content>
          <div v-for="question in questions" :key="question.id">
            <!-- Select -->
            <md-field v-if="question.type == 'select'">
              <label>{{question.question}}</label>
              <md-select v-bind:id="question.id" @input="updateState(question.id, $event)">
                <md-option v-for="option in question.options" v-bind:value="option">{{option}}</md-option>
              </md-select>
            </md-field>
            <!-- Textarea -->
            <md-field v-if="question.type == 'text'">
              <label>{{question.question}}</label>
              <md-textarea v-bind:id="question.id" @input="updateState(question.id, $event)">
              </md-textarea>
            </md-field>
            <!-- Radio buttons -->
            <div  v-if="question.type == 'radio'">
              <label v-bind:for="question.id">{{question.question}}</label>
              <md-radio v-for="option in question.options" v-model="childVals[question.id]" :value="option" @change="updateState(question.id, $event)">
                {{option}}
              </md-radio>
            </div>
            <div v-if="question.type == 'switch'">
              <label v-bind:for="question.id">{{question.question}}</label>
              <md-switch v-for="option in question.options" v-model="childVals[question.id + option]" :value="option" @change="appendToState(question.id, $event)">
                {{option}}
              </md-switch>
            </div>
            <div v-if="question.type == 'checkbox'">
              <label v-bind:for="question.id">{{question.question}}</label>
              <md-checkbox v-for="option in question.options" v-model="childVals[question.id + option]" :value="option" @change="appendToState(question.id, $event)">
                {{option}}
              </md-checkbox>
            </div>
            <!--
            TODO: Add other input types
            -->
            <md-divider></md-divider>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Survey',
  data() {
    return {
      childVals: {},
      radio: null,
    };
  },
  computed: {
    ...mapGetters(['questions', 'answers']),
  },
  methods: {
    updateState(id, value) {
      this.setAnswer({
          id: id,
          value: value,
      });
    },
    appendToState(id, value) {
      let previous = this.answers[id];
      if (previous === undefined) {
        previous = [];
      }
      previous.push(value);
      this.updateState(id, previous);
    },
    ...mapMutations(['setAnswer']),
  },
};
</script>

<style>
  .md-switch, .md-checkbox, .md-radio {
    display: flex;
  }
</style>
