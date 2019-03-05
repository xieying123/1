<template>
  <div class="headtop">
      <div class="topcontent">
          <div class="detailContent">
            <div class="Photo">
                <img src="../../assets/images/logoheader.png" alt="" srcset="">
            </div>
            
            <div class="headDesc">
               <p class="companyName">陕西睿合易股科技有限公司</p>
               <p class="name">智慧工地</p>
               <p class="sloga"><span>name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <span><img src="../../assets/images/yun.jpg" alt="天气图片" class='slogaImg'>&nbsp;阴天/温度</span></p>
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
        height: 50px;
        background:#515151;
        .detailContent{
            width: 90%;
            height: 100%;
            margin: auto;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .Photo{
                width: 35px;
                height: 35px;
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
                    font-size: 20px;
                    color: #ddd;
                    letter-spacing: 5px;
                }
                .sloga{
                    margin-left: 5%;                    
                    color: #ddd;
                    font-size: 16px;
                    // font-style:italic;
                    .slogaImg{
                        width: 35px;
                        height: 35px;
                        border-radius: 50%;
                        vertical-align:middle
                    }
                }
                .name{
                    font-size: 22px;
                    color: #ddd;
                }
            }

            
        }
    }
}
</style>
