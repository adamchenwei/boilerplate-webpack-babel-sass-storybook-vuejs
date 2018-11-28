import { configure } from '@storybook/vue';
import Vue from 'vue';

const req = require.context('../src/components', true, /.stories.js$/); // <- import all the stories at once

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);