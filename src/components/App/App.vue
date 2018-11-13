<template>
  <div class="full-width center-content">
    <hello-component name="HELLO" />
    <bye-component name="BYE" />
  </div>
</template>
<script>
import HelloComponent from '../HelloComponent/HelloComponent.vue'
import ByeComponent from '../ByeComponent/ByeComponent.vue'

export default {
  components: {
    HelloComponent,
    ByeComponent
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    color: red;
    .wave {
      color: blue;
    }
  }
</style>
