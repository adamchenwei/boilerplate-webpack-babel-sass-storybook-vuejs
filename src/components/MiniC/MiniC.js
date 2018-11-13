import { storiesOf } from '@storybook/vue'
import MiniC from './MiniC.vue'

storiesOf('MiniC', module)
  .add('default', () => ({
    components: { MiniC },
    template: '<MiniC name="Eve"/>'
  }))
