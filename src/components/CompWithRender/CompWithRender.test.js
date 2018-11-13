import { shallowMount } from '@vue/test-utils'
import CompWithRender from './CompWithRender.vue'

describe('CompWithRender', () => {
  it('should work', () => {
    const wrapper = shallowMount(CompWithRender, {
      propsData: { msg: 'Yoooooo' }
    });
    expect(wrapper.findAll('.comp-with-render').length).toEqual(1)
  })
});
