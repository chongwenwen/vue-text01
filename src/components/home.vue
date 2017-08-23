<!--以后这里放项目的根组件-->
<template>
   <div id="routerView">
   <!-- 轮播图 -->
      <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in slideList"><img v-bind:src="item.img"></mt-swipe-item>
      </mt-swipe>
   <!-- 九宫格 -->
      <div class="mui-content">
         <ul class="mui-table-view mui-grid-view mui-grid-9">
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/news/newlist">
                  <span class="mui-icon mui-icon-home"></span>
                  <div class="mui-media-body">新闻资讯</div>
                </router-link>
             </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/photo/photolist">
                  <span class="mui-icon mui-icon-email"></span>
                  <div class="mui-media-body">图片分享</div>
                </router-link>
             </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/goods/goodslist">
                   <span class="mui-icon mui-icon-chatbubble"></span>
                   <div class="mui-media-body">商品购买</div>
                </router-link>
             </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/feekback">
                   <span class="mui-icon mui-icon-location"></span>
                   <div class="mui-media-body">留言反馈</div>
                </router-link>
             </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/video">
                   <span class="mui-icon mui-icon-search"></span>
                   <div class="mui-media-body">视频专区</div>
                </router-link>
             </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/callme">
                   <span class="mui-icon mui-icon-phone"></span>
                   <div class="mui-media-body">联系我们</div>
                </router-link>
             </li>  
         </ul> 
      </div>
   </div>  
</template>

<script>
   
   import { Toast } from 'mint-ui';

   export default{   
       data(){
          return {
             msge: "",
             slideList:[]
          }
       },
       methods:{
        //轮播图数据
          getList(){
            var url = this.$urlPrefix+"/api/getlunbo";
            
            this.$http.get(url).then(function(response){

                 console.log(response.body.message);
                 if(response.body.status != 0){

                    Toast(response.body.message);//弹出信息
                    return;
                 }
                
                  this.slideList =  response.body.message;
            })
          }
       },
       created(){
          this.getList();
       }
   };
</script>
<style scoped>
    .mint-swipe {
        height: 300px;
        width: 100%;
    }
    .mint-swipe-item>img {
         width: 100%;
         height: 100%;
    }
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before {
        content:"";
        width: 50px;
        height: 50px;
        display: block;
        background-size: 50px 50px;
    }
    .mui-icon-home:before {
        background-image: url("../../statics/images/1.png");
    }
    .mui-icon-email:before {
        background-image: url("../../statics/images/2.png");
    }
    .mui-icon-chatbubble:before {
        background-image: url("../../statics/images/3.png");
    }
    .mui-icon-location:before {
        background-image: url("../../statics/images/4.png");
    }
    .mui-icon-search:before {
        background-image: url("../../statics/images/5.png");
    }
    .mui-icon-phone:before {
        background-image: url("../../statics/images/6.png");
    }
    .mui-content {
        background-color: #fff;
    }
    .mui-content > .mui-table-view:first-child {
        margin-top: 0;
    }
    .mui-grid-view.mui-grid-9 {
        border:0;
        background-color: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
</style>