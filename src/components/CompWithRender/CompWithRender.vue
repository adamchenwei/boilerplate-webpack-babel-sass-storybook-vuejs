<script>
  export default {
    name: 'CompWithRender',
    props: {
      msg: String,
    },
    mounted() {
      console.log('CompWithRender is mounted');
    },
    render(h) {
      if (this.func) this.func();
      return (
        <div class="comp-with-render">
          <h1>CompWithRender: <span>Pal</span> <span>{this.msg}</span></h1>
        </div>
      )
    }
  };
</script>