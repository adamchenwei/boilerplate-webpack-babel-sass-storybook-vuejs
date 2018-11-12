import { storiesOf } from '@storybook/vue'
import ByeComponent from './ByeComponent.vue'

storiesOf('ByeComponent', module)
  // NOTE: it has problem render!
  // .add('story as a template', () => '<ByeComponent name="Adam" />')
  .add('default', () => ({
    components: { ByeComponent },
    template: '<ByeComponent name="Eve"/>'
  }))
