<template>
  <div>
    <h1>YOOOOOO In HelloComponent</h1>
    <h1>Aloha Hello {{ name }}!</h1>
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
  },
  data () {
    return {}
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
