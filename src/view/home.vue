<template>
  <div>
      <v-header></v-header>
      <v-left></v-left>
  </div>
</template>

<script>
import HeadTop from '../components/common/HeadTop'
import Left from './Left'
export default {
  components: {
      'v-header': HeadTop,
      'v-left':Left
  },
  props: {},
  data () {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created () {
    //当打开页面时数据刷新
  },
  mounted () {}
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  
</style>
<style>

</style>

