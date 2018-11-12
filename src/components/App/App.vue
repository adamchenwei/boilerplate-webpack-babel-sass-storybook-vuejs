<template>
  <div class="full-width center-content">
    <hello-component name="World" />
  </div>
</template>
<script>
import HelloComponent from '../HelloComponent/HelloComponent.vue'
export default {
  components: {
    HelloComponent
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
