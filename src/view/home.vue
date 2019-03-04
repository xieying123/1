<template>
  <div>
      <v-header></v-header>
      <div class="setionStep">
        <el-scrollbar style="height: 100%;">
          <div class="centercontent">
            <div class="descItem" v-for="(item,index) in 6" :key="index">
              <img src="../assets/images/oa.jpg" alt="OA" srcset="" class="showImg"> 
              <div class="downdetail">
                <p>OA</p>
                <P class="detailname">详情</P>
              </div>
            </div>
          </div>
        </el-scrollbar>
        <div class="fixedRight">
          <el-carousel :interval="2000" arrow="never" height="500px" indicator-position="none">
            <el-carousel-item v-for="item in 4" :key="item">
              <div class="adlist">
                <p class="aditem" v-for="item in 11" :key="item">广告1：猪八戒没媳妇你看好的渴望和奋斗</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <v-footer></v-footer>
  </div>
</template>

<script>
import HeadTop from '../components/common/HeadTop'
import end from '../components/common/end'
export default {
  components: {
      'v-footer':end,
      'v-header': HeadTop
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
  .setionStep{
    width: 100%;
    height: auto;
    flex: 1;
    height: calc(100vh - 293px);
    background: salmon;
    // margin-top: 15px;
    .centercontent{
      width: 55%;
      height: auto;
      margin-left: 10%; 
      background: pink;
      display: flex;
      flex-wrap: wrap;
      padding: 15px;
      .descItem{
        width: 200px;
        height: 250px;
        box-shadow: 1px 1px 5px #333;
        border-radius: 5px;
        margin-left: 10%;
        margin-top: 15px;
        .showImg{
          width: 100%;
          height: 200px;
        }
      }
      .downdetail{
        width: 85%;
        margin: auto;
        // flex: 1;
        height: 40px;
        display: flex;
        // font-size: 14px;
        justify-content: space-between;
        align-items: center;
        :nth-child(1){
          font-size: 18px;
          color: #8E2323;
          font-weight: bold;
        }
        .detailname{
          width: 60px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border-radius: 5px;
          border: 1px solid #ccc;
          color: #333;
          cursor: pointer;
          &:hover{
            background: #8E2323;
            color: #fff;
            border: none;
          }
        }
      }
    }
    .fixedRight{
      width: 200px;
      height: 500px;
      position: fixed;
      right: 0;
      top: 120px;
      background: #ccc;
      .adlist{
        width: 95%;
        height: 490px;
        margin: 5px auto;
        .aditem{
          width: 200px;
          height: 30px;
          line-height: 30px;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          font-size: 12px;
          color: #333;
          border-bottom: 1px solid #000;

        }
      }
    }
  }
</style>
<style>
body{
  margin: 0px;
}
.el-scrollbar__wrap {
   overflow-x: hidden;
}
</style>

