import { shallowMount } from '@vue/test-utils'
import TestAb from './TestAb.vue'

describe('TestAb', () => {
  it('should work', () => {
    const wrapper = shallowMount(TestAb, {
      propsData: { name: 'myname' }
    });
    expect(wrapper.findAll('.c').length).toEqual(1)
  })
});
