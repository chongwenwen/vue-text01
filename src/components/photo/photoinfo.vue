<template>
   <div id="routerView">
    
     <div class="title" v-for="item in list">
        <div class="phototitle">
            <h4 v-text="item.title"></h4>
            <p>{{item.add_time | dataFmt("YYYY-MM-DD HH:mm:ss")}}  1次浏览  分类:经济民生</p>
        </div>
        <div class="photo-img">
            <ul>
                <li v-for="(item,index) in imglist">
                   <img class="preview-img" :src="item.src" height="100px" @click="$preview.open(index,imglist)">
                </li>
            </ul>
            <p v-html="item.content"></p>
        </div>     
     </div>
     <comment v-bind:id="imgid"></comment>     
   </div>  
</template>

<script>
   import { Toast } from 'mint-ui';
   import comment from "../../subcom/comment.vue";
   export default{   
      data(){
         return {
            imgid:0,
            list:[],
            imglist:[]
         }
      },
      components:{  //引入评论组件
          //"comment": comment //es5写法
          comment  //es6写法
      },
      created(){

          this.imgid = this.$route.params.id; //从ul地址栏获取id信息
          
          this.getimgdesc();
          this.getimgInfo();
      },
      methods:{
         getimgdesc(){
            var url = this.$urlPrefix + "/api/getimageInfo/"+this.imgid;
            this.$http.get(url).then(function(response){
                  var body = response.body;
                  if(body.status!=0){
                     Toast(body.message);
                     return;
                  }
                   console.log(body.message);
                  this.list = body.message;
            })
         },
         getimgInfo(){

            var url = this.$urlPrefix + "/api/getthumimages/"+this.imgid;
            this.$http.get(url).then(function(response){
               var body = response.body;
                if(body.status!=0){
                     Toast(body.message);
                     return;
                  }
                //模拟请求到的图片数据
                  var imgUrl = [
                              
                                "https://f12.baidu.com/it/u=2560538472,503347241&fm=72",
                                
                                "https://f11.baidu.com/it/u=772221480,1053258840&fm=72",
                                  
                                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2029749288,2979154280&fm=26&gp=0.jpg",
                                
                                 "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=803082519,2449013027&fm=26&gp=0.jpg",
                                  
                                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=241882556,1377781259&fm=26&gp=0.jpg",
                                  
                            ];

                   this.imglist =  response.body.message;  //让页面显示的数组先等于请求的数据中的数组
                   this.imglist.forEach(function(item,index){
                         item.src = imgUrl[index];   //因为图片数据路径不对,所以需要这里冲新匹配假数
                       
                         //这里新建一个img标签是为了设置图片放大后的实际宽高,不会失真
                         var newimg = document.createElement("img");
                         newimg.src = item.src;
                         item.h = newimg.height;  //这里的h和w的写法是vue-review插件里面要求的,也只有imglist配置了宽和高才可以点击放大
                         item.w = newimg.width;
                        
                   }) 

            })
         }
      }
   };
</script>

<style scoped>
    .phototitle {
     width: 100%;
     padding-left: 10px;
     padding-top: 10px;
     margin-top: 44px;
   }
   .phototitle>h4 {
      font-weight: 500;
      color: #007aff;
   }
   .phototitle>p {
      margin-top: 10px;
   }
   .phototitle>span {
      display: block;
      line-height: 30px;
      margin-top: 10px;
      color: gray;
   }
   .photo-img[data-v-71d4500d]{
      padding: 0 10px;
   }
   .photo-img>ul { 
      width: 100%;
      overflow: hidden;
      -webkit-padding-start:0;
      border-top: 1px solid #ccc;
   }
   .photo-img>ul>li {
      list-style: none;
      float: left;
      width: 30%;
      margin-top: 20px;
      text-align: center;

   }
   .photo-img>ul>li>img {
      width: 100px;
      height: 100px;
   }
   
</style>