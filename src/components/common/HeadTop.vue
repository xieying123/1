<template>
  <div class="headtop">
      <div class="topcontent">
          <div class="detailContent">
            <div class="Photo">
                <img src="../../assets/images/logoheader.png" alt="" srcset="">
            </div>
            <div class="headDesc">
               <p class="companyName">陕西睿合易股科技有限公司</p>
               <p class="sloga">没有执行，一切都是空谈~</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.headtop{
    width: 100%;
    .topcontent{
        width: 100%;
        height: 85px;
        background: #ccc;
        .detailContent{
            width: 70%;
            height: 100%;
            margin: auto;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .Photo{
                width: 65px;
                height: 65px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .headDesc{
                margin-left: 2%;
                height: 65px;
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .companyName{
                    font-size: 33px;
                    color: #fff;
                    letter-spacing: 5px;
                }
                .sloga{
                    margin-left: 5%;                    
                    color: #8E2323;
                    font-size: 22px;
                    font-style:italic;
                }
            }

            
        }
    }
}
</style>
