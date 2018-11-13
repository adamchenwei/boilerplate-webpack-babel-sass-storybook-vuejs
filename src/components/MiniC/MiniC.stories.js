import { storiesOf } from '@storybook/vue'
import MiniC from './MiniC.vue'

storiesOf('MiniC', module)
  // NOTE: it has problem render!
  // .add('story as a template', () => '<MiniC name="Adam" />')
  .add('default', () => ({
    components: { MiniC },
    template: '<MiniC name="Eve"/>'
  }))
