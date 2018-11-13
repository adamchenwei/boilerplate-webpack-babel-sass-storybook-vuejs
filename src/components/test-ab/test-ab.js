import { storiesOf } from '@storybook/vue'
import TestAb from './test-ab.vue'

storiesOf('test-ab', module)
  .add('default', () => ({
    components: { TestAb },
    template: '<test-ab name="Eve"/>'
  }))
