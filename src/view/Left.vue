<template>
  <div class="wrapper">
        <p class="state">这是一段文字说明</p>

      <div class="com">OA</div>
      <div class="com">OA</div>
      <div class="com">OA</div>
      <div class="com">OA</div>
      <div class="com">OA</div>
      <div class="com">OA</div>
      <div class="com">OA</div>
      <div class="com">OA</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: {},
  data () {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.wrapper{
  overflow: hidden;
  width: 275px;
  background: #6b6b6b;
  padding-left: 25px;
  height:calc(100vh - 70px);
  padding-bottom: 20px;
  .state{
    width: 250px;
    line-height: 30px;
    padding:25px 25px 25px 0;
    text-indent:2em;
  }
  .com{
    width: 100px;
    line-height: 100px;
    float: left;
    text-align: center;
    margin-right: 35px;
    border:1px solid #aaa;
    margin-bottom: 30px;
    box-shadow:1px 1px 5px #aaa
  }
}
</style>
