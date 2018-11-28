import { shallowMount } from '@vue/test-utils'
import App from './components/App/App.vue'

describe('App', () => {
  it('should work', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.findAll('.full-width').length).toEqual(1)
  })
})
