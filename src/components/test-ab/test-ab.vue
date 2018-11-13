<template>
  <h1 class="c">TestAb {{ name }}!</h1>
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
    color: green;
  }
</style>
