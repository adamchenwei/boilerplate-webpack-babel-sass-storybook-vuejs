import { shallowMount } from '@vue/test-utils'
import ByeComponent from './ByeComponent.vue'

describe('ByeComponent', () => {
  it('should work', () => {
    const wrapper = shallowMount(ByeComponent, {
      propsData: { name: 'myname' }
    });
    expect(wrapper.findAll('.another-wave').length).toEqual(1)
  })
});
