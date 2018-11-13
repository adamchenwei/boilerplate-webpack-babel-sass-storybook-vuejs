<template>
  <h1 class="c">MiniC {{ name }}!</h1>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .c {
    color: gainsboro;
  }
</style>
