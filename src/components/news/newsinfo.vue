<template>
    <div id="routerView">
       <div class="mui-bar mui-bar-nav">
            <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/news/newlist" style="font-size: 16px"></router-link>
            <h1 class="mui-title">资讯详情</h1>
        </div>
       <div class="tile">
           <h3>{{infolist.title}}</h3>
           <span>{{infolist.add_time | dataFmt("YY-MM-DD hh:mm:ss")}} 1次浏览 分类:经济民生</span>
       </div>
       <div v-html="infolist.content" class="content"></div>
       <!-- 评论组件 -->
       <comment v-bind:id="newsId"></comment>    
    </div> 
</template>

<script>
//导入评论子组件
import comment from "../../subcom/comment.vue";
   export default{   
       data(){
          return {
             infolist:{},
             newsId:""
          }
       },
       components:{
          //"comment": comment //es5写法
          comment  //es6写法
       },
       created(){
          this.newsId = this.$route.params.id;
          this.getinfoList();
       },
       methods:{
           
           getinfoList(){
                var url = this.$urlPrefix+"/api/getnew/" + this.newsId;
                this.$http.get(url).then(function(response){
                     
                     if(response.body.status != 0){
                    
                        Toast(response.body.message);//弹出信息
                        return;
                     }
                    console.log(response.body);
                    this.infolist = response.body.message[0];
                    
               })  
           }
       }
   };
</script>

<style scoped>
   .tile {
     height: 100px;
     width: 100%;
     padding-left: 10px;
     padding-top: 20px;
     margin-top: 44px;
   }
   
   .tile>span {
      display: block;
      line-height: 30px;
      margin-top: 10px;
      color: gray;
   }
   .content {
      padding: 10px;
   }
   .mui-title {
        color: #007aff;
        font-size: 20px;
   }
   .mui-bar .mui-bar-nav {
        border-bottom: 1px solid #ccc;
    }
    .mui-icon-back:before, .mui-icon-left-nav:before {
        content: "返回";
        height: 44px;
   }
   .mui-bar .mui-icon {
      padding-top: 15px;
   }
</style>