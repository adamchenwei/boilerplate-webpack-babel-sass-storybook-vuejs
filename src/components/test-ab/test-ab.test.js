import { shallowMount } from '@vue/test-utils'
import TestAb from './test-ab.vue'

describe('TestAb', () => {
  it('should work', () => {
    const wrapper = shallowMount(TestAb, {
      propsData: { name: 'myname' }
    });
    expect(wrapper.findAll('.c').length).toEqual(1)
  })
});
