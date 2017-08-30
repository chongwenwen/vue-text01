<template>
   <div id="routerView">
      
       <div class="photo-nav">
           <ul v-bind="{style:'width:'+ulWidth+'px'}">
               <li @click="getimgs(0)">全部</li>
               <li v-for="item in titlelist" @click="getimgs(item.id)">{{item.title}}</li>
           </ul>
       </div>
       <div class="photo-info">
           <ul>
              <li v-for="item in catelist">
                <router-link v-bind="{to:'/photo/photoinfo/'+item.id}">
                    <img v-lazy="img">
                    <div class="img-list">
                         <h4 v-text="item.title"></h4>
                         <p v-text="item.zhaiyao"></p>
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
              ulWidth:0,
              titlelist: [],
              catelist:[],
              img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2104512137,389178664&fm=26&gp=0.jpg"
           }
        },
        created(){
            //获取标题
            this.gettitle();

            //页面一刷新加载图片页面
            var all = 0; //页面一刷新先默认显示全部 全部id=0
            this.getimgs(all);
        },
        methods:{
            gettitle(){
                var url = this.$urlPrefix+"/api/getimgcategory";
                this.$http.get(url).then(function(response){
                      var body = response.body;
                      // console.log(body);
                      if(body.status!=0){
                        Toast(body.message);
                        return;
                      }
                      this.titlelist = body.message;
                      // console.log(this.titlelist);
                      var liWidth = 80; //每个li的宽度
                      this.ulWidth = (this.titlelist.length+1)*liWidth; //ul的总宽度
                })
            },
             getimgs(cateid){

                cateid = cateid || 0;//获取不到就显示0

                var url = this.$urlPrefix+ "/api/getimages/"+cateid;//cateid参数里面赋值了

                this.$http.get(url).then(function(response){
                    var body = response.body;
                      // console.log(body);
                      if(body.status!=0){
                        Toast(body.message);
                        return;
                      }
                      this.catelist = body.message;
                })
             }

        }
   };
</script>

<style scoped>
    .photo-nav {
        overflow: auto;
    }
    .photo-nav>ul{
        -webkit-padding-start: 0;
    }
    .photo-nav>ul>li{
        list-style: none;
        float: left;
        margin-left: 10px;
        height: 40px;
        color: #007aff;
    }
    .photo-info>ul {
        -webkit-padding-start: 0;
        -webkit-margin-before: 0;
        width: 100%;
    }
    .photo-info>ul>li {
        position: relative;
        list-style: none;
        width: 100%;
    }
    .photo-info>ul>li>a>img{
        width: 100%;
    }
    .photo-info>ul>li>a>.img-list {
        color: #fff;
        font-size: 14px;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        bottom: 4px;
        left: 0;
        width: 100%;
        height: 90px;
        overflow: hidden;
    }
    .photo-info>ul>li>a>.img-list>h4 {
        color: #eee;
        font-weight: 500;
        font-size: 18px;
    }
    image[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    
</style>