<!--以后这里放项目的根组件-->
<template>
   <div>
       <div class="backbtn" v-if="isshow">
          <a href="javascript:;" @click="backTo">返回</a>
       </div>
       <mt-header fixed title="前端商城" class="head"></mt-header>
                   
       <router-view></router-view>
       
       <nav class="mui-bar mui-bar-tab">
          <router-link class="mui-tab-item" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
          </router-link>
          <router-link class="mui-tab-item" to="/member">
            <span class="mui-icon mui-icon-email"></span>
            <span class="mui-tab-label">会员</span>
          </router-link>
          <router-link class="mui-tab-item" to="/cart">
            <span class="mui-icon mui-icon-contact">
               <!-- 徽章 -->
               <span class="mui-badge" v-text="totalCount"></span>
            </span>
            <span class="mui-tab-label">购物车</span>
          </router-link>
          <router-link class="mui-tab-item" to="/search">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">搜索</span>
          </router-link>
       </nav>
   </div>  
</template>

<script>
   import {getTotalCount} from "./kit/localStorageTool.js";
   export default{   
       data(){
           return{
              totalCount:0,  //设徽章的初始值为0
              isshow:false
           }
       },
       created(){
          
           this.totalCount = getTotalCount();

           //监听购物车的事件
           //window.eventBus = vm的全局对象.谁监听了这个事件 ,就可以获取这个事件对应的数据
           window.eventBus.$on("carUpNumber",function(){
                var muiBadge = document.querySelector(".mui-badge");
                muiBadge.innerText = getTotalCount() + "";
               
           })
       },
       watch:{
          //设置返回显示,如果是首页不显示
          "$route":function(newroute,oldroute){
               console.log(newroute,oldroute);
               //newroute - {path: "/home"}, 
               //oldroute - {path: "/goods/goodslist"}
               if(newroute.path.toLowerCase()=="/home"){ 
               	//toLowerCase()将字符串中的字母被转换为小写字母
                  this.isshow=false;
               }else{
                  this.isshow=true;
               }
          }
       },
       methods:{
        //设置返回
          backTo(){
            
             this.$router.go(-1) //始终返回之前的页面
          }
       }
   };
</script>
<style scoped>

   .backbtn {
       width: 50px;
       height: 30px;
       position: fixed;
       top: 10px;
       left: 10px;
       z-index: 1000;
   }
   .backbtn>a {
      color: #fff;
      font-size: 16px;
      
   }
</style>