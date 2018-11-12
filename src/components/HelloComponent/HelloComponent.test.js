import { shallowMount } from '@vue/test-utils'
import HelloComponent from './HelloComponent.vue'

describe('HelloComponent', () => {
  it('should work', () => {
    const wrapper = shallowMount(HelloComponent, {
      propsData: { name: 'myname' }
    });
    expect(wrapper.findAll('.wave').length).toEqual(1)
  })
});
