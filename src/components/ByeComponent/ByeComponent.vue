<template>
  <div>
    <h1>In ByeComponent</h1>
    <h1>Bye {{ name }}!</h1>
    <div class="another-wave lololo">div Is here <h2>in side h2</h2></div>
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
    color: cyan;
  }
  .lololo {
    color: red;
  }

  .another-wave {
    h2 {
      color: blue;
    }
    color: steelblue;
  }
</style>
