<template>
  <div class="wrapper">
    <div class="top">
     <ul class="ul1">
        <li class="item">睿合易谷产品</li>
        <li class="item">系统管理</li>
        <li class="item">OA系统</li>
        <li class="item">设施系统</li>
        <li class="item">材料系统</li>
        <li class="item">关于我们</li>
      </ul>
    </div>
    <div class="bottom">
      <ul class="ul">
        <li class="item">数据查询</li>
        <li class="item">数据查询</li>
      </ul>
      <ul class="ul">
        <li class="item">数据查询</li>
        <li class="item">数据查询</li>
      </ul><ul class="ul">
        <li class="item">数据查询</li>
        <li class="item">数据查询</li>
      </ul><ul class="ul">
        <li class="item">数据查询</li>
        <li class="item">数据查询</li>
      </ul>
      <ul class="ul">
        <li class="item">数据查询</li>
        <li class="item">数据查询</li>
      </ul>
      <ul class="ul">
        <li class="item">数据查询</li>
        <li class="item">数据查询</li>
      </ul>
    </div>
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
  width: 100%;
  height: 200px;
  background-color: #666;
  color: #ddd;
  padding: 30px 0px 0px 0px;
  // margin: 0 auto;
  .top{
    overflow: hidden;
    width: 80%;
    line-height: 50px;
    margin: 0 auto;
    // padding: 20px 50px 0px 50px;
    .ul1{
      width: 80%;
      margin: 0 auto;
       .item{
        float: left;
        list-style: none;
        width: 120px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        line-height: 35px;
        text-align: center;
        margin-right:20px;
      }
    }
    
  }
  .bottom{
    width: 70%;
    margin: 0 auto;
    .ul{
      padding-left: 5px;
        float: left;
        list-style: none;
        width: 120px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        line-height: 35px;
        text-align: center;
        margin-right:14px;
        &:nth-of-type(1){
          padding-left: 80px;
        }
    }
    
  }
}
</style>
