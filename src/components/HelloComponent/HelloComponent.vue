<template>
  <div>
    <h1>In HelloComponent</h1>
    <h1>Hello {{ name }}!</h1>
    <div class="wave">div Is here <h2>in side h2</h2></div>
  </div>
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
  h1 {
    color: orange;
  }

  .wave {
    h2 {
      color: red;
    }
    color: orchid;
  }
</style>
