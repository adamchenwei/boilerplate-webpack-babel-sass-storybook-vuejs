import { shallowMount } from '@vue/test-utils'
import App from './components/App/App.vue'
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots'

initStoryshots({
  storyKindRegex: /^((?!.*?DontTest).)*$/,
  test: multiSnapshotWithOptions({

    // createNodeMock: (element) => {
    //   if (element.type === TextareaThatUsesRefs) {
    //     return document.createElement('textarea')
    //   }
    // },
  })
})

describe('App', () => {
  it('should work', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.findAll('.full-width').length).toEqual(1)
  })
})
