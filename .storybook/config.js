import { configure } from '@storybook/vue';

import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
// import HelloComponent from '../src/components/HelloComponent/HelloComponent.vue';

// // Install Vue plugins.
// // Vue.use(Vuex);

// // Register custom components.
// Vue.component('HelloComponent', HelloComponent);

// NOTE: storyshot configs
const req = require.context('../src/components', true, /.stories.js$/); // <- import all the stories at once

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);