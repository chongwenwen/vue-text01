<template>
   <div id="routerView">
     <div class="title" v-for="item in list">
        <div class="phototitle">
            <h4 v-text="item.title"></h4>
            <p>{{item.add_time | dataFmt("YYYY-MM-DD HH:mm:ss")}}  1次浏览  分类:经济民生</p>
        </div>
        <div class="photo-img">
            <ul>
                <li><img v-bind:src="img"></li>
                <li><img v-bind:src="img"></li>
                <li><img v-bind:src="img"></li>
                <li><img v-bind:src="img"></li>
                <li><img v-bind:src="img"></li>
            </ul>
            <p v-html="item.content"></p>
        </div>     
     </div>
     <comment v-bind:id="imgid"></comment>     
   </div>  
</template>

<script>
   import comment from "../../subcom/comment.vue";
   export default{   
      data(){
         return {
            imgid:0,
            list:[],
            img:"http://img4.imgtn.bdimg.com/it/u=2566850184,1352185804&fm=26&gp=0.jpg"
         }
      },
      components:{
          //"comment": comment //es5写法
          comment  //es6写法
      },
      created(){

          this.imgid = this.$route.params.id; //从ul地址栏获取id信息
          
          this.getimgInfo();
      },
      methods:{
         getimgInfo(){
            var url = this.$urlPrefix + "/api/getimageInfo/"+this.imgid;
            this.$http.get(url).then(function(response){
                  var body = response.body;
                   console.log(body.message);
                  this.list = body.message;
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