<!--以后这里放项目的根组件-->
<template>
   <!-- html页面结构-->
   <div>
      <p class="red">{{msg}}</p>
      <!--<button @click="low1(6,3)">add</button>-->
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
      <router-view></router-view>
      <mt-button type="danger" @click="open" size="normal">danger</mt-button>
      <div class="mui-content">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          循环
          <div id="Gallery_Toggle" class="mui-switch">
            <div class="mui-switch-handle"></div>
          </div>
        </li>
      </ul>
      <div id="Gallery" class="mui-slider" style="margin-top:15px;">
        <div class="mui-slider-group">
          <div class="mui-slider-item">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-home"></span>
                  <div class="mui-media-body">Home</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                  <div class="mui-media-body">Email</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-chatbubble"></span>
                  <div class="mui-media-body">Chat</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-location"></span>
                  <div class="mui-media-body">location</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-search"></span>
                  <div class="mui-media-body">Search</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-phone"></span>
                  <div class="mui-media-body">Phone</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-gear"></span>
                  <div class="mui-media-body">Setting</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-info"></span>
                  <div class="mui-media-body">about</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-more"></span>
                  <div class="mui-media-body">more</div>
                </a>
              </li>
            </ul>
          </div>
          <div class="mui-slider-item">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-home"></span>
                  <div class="mui-media-body">Home</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                  <div class="mui-media-body">Email</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-chatbubble"></span>
                  <div class="mui-media-body">Chat</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-location"></span>
                  <div class="mui-media-body">location</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-search"></span>
                  <div class="mui-media-body">Search</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-phone"></span>
                  <div class="mui-media-body">Phone</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-gear"></span>
                  <div class="mui-media-body">Setting</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-info"></span>
                  <div class="mui-media-body">about</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-more"></span>
                  <div class="mui-media-body">more</div>
                </a>
              </li>
            </ul>
          </div>
          <div class="mui-slider-item">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-home"></span>
                  <div class="mui-media-body">Home</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                  <div class="mui-media-body">Email</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-chatbubble"></span>
                  <div class="mui-media-body">Chat</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-location"></span>
                  <div class="mui-media-body">location</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-search"></span>
                  <div class="mui-media-body">Search</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-phone"></span>
                  <div class="mui-media-body">Phone</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-gear"></span>
                  <div class="mui-media-body">Setting</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-info"></span>
                  <div class="mui-media-body">about</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-more"></span>
                  <div class="mui-media-body">more</div>
                </a>
              </li>
            </ul>
          </div>

        </div>
        <div class="mui-slider-indicator">
          <div class="mui-indicator mui-active"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
        </div>
      </div>
    </div>


      <div class="title">
        缩略图居右
      </div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-right" src="file:///C:/Users/zhongwenwen/Desktop/%E5%90%84%E7%A7%8D%E5%BA%93/mui/examples/hello-mui/images/muwu.jpg">
            <div class="mui-media-body">
              远眺
              <p class='mui-ellipsis'>静静的看这个世界，最后终于疯了</p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-right" src="file:///C:/Users/zhongwenwen/Desktop/%E5%90%84%E7%A7%8D%E5%BA%93/mui/examples/hello-mui/images/muwu.jpg">
            <div class="mui-media-body">
              幸福
              <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-right" src="file:///C:/Users/zhongwenwen/Desktop/%E5%90%84%E7%A7%8D%E5%BA%93/mui/examples/hello-mui/images/muwu.jpg">
            <div class="mui-media-body">
              木屋
              <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
          </a>
        </li>
      </ul>
   </div>  
</template>

<script>
//全局导出
  //import calc from "./calc.js";
  import {low} from "./calc.js";

  import { Indicator } from 'mint-ui';

//   负责导出.vue组件对象 本身是一个Vue对象 里面的属性和方法跟vue一样
  
  //function add(x,y){alert(x+y);}
   
   export default{     //es5  module.exports={ }
       data(){          // es6写法  等价于es5中的 data:function(){
           return {
             msg: "hello vue.jsvue111"
           }
       },
       methods:{
         //add   //es6写法  同于es5的 add:add
         //low1: calc.low
        //low1:low,
         open:function(){
             Indicator.open('加载中...');
         }
       }
   };
</script>

<style scoped>
    .red{
       color: #f40;
    }
</style>