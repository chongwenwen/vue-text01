<template>
   <div id="routerView">
        <div class="mui-bar mui-bar-nav">
            <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/home" style="font-size: 16px"></router-link>
            <h1 class="mui-title">图文资讯</h1>
        </div>
        <div class="mui-content">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="item in newlist">
                    <router-link v-bind="{to:'/news/newsinfo/' + item.id}">
                        <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
                        <div class="mui-media-body">
                           {{item.title}}
                            <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                            <p><span>发表时间: {{item.add_time | dataFmt("YY-MM-DD hh:mm:ss") }}</span><i>点击: {{item.click}}</i></p>
                        </div>
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
             newlist:[]
          }
       },
       methods:{
          getNewList(){
            var url = this.$urlPrefix+"/api/getnewslist";
              this.$http.get(url).then(function(response){
                  if(response.body.status != 0){
                    
                    Toast(response.body.message);//弹出信息
                    return;
                  }
                 // console.log(response.body);
                  this.newlist = response.body.message;
              })
          }
       },
       created(){
          this.getNewList();
       }
   };
</script>

<style scoped>
    .mui-title {
        color: #007aff;
        font-size: 20px;
    }
    .mui-bar .mui-icon {
         padding-top: 15px;
         font-size: 18px;
    }
    .mui-media-body {
        height: 60px;
    }
    .mui-media-body>p {
        font-size: 13px;
    }
    .mui-media-body>p:last-of-type {
        color: #007aff;
        margin-bottom: 5px;
    }
    .mui-media-body>p>span {
        float: left;
    } 
    .mui-media-body>p>i {
        font-style: normal;
        float: right;
    }
    .mui-content {
        padding-top: 0px;
    }
    .mui-table-view .mui-media-object {
        width: 60px;
        height: 60px;
        max-width: 60px;
        line-height: 60px;
    }
    .mui-bar .mui-bar-nav {
        margin-top: 40px;
        border-bottom: 1px solid #ccc;
    }
    .mui-icon-back:before, .mui-icon-left-nav:before {
        content: "返回";
        height: 44px;
    }
</style>