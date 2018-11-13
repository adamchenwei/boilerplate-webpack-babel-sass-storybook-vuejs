import { storiesOf } from '@storybook/vue'
import TestAb from './test-ab.vue'

storiesOf('TestAb', module)
  // NOTE: it has problem render!
  // .add('story as a template', () => '<TestAb name="Adam" />')
  .add('default', () => ({
    components: { TestAb },
    template: '<test-ab name="Eve"/>'
  }))
