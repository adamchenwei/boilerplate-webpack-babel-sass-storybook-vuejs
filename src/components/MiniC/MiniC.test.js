import { shallowMount } from '@vue/test-utils'
import MiniC from './MiniC.vue'

describe('MiniC', () => {
  it('should work', () => {
    const wrapper = shallowMount(MiniC, {
      propsData: { name: 'myname' }
    })
    expect(wrapper.findAll('.c').length).toEqual(1)
  })
})
