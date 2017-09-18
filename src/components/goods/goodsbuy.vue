<template>
   <div id="routerView">

       <slider :imgs="slideList" class="swiper"></slider>

       <div class="sprice">
           <h4>{{goosinfo.title}}</h4>
           <div>
               <ul>
                   <li>市场价: <s>¥{{goosinfo.market_price}}</s>  <span>销售价:<i style="color: red">¥{{goosinfo.sell_price}}</i></span></li>
                   <li>
                        <!-- dataObj 是一个事件,不是属性,所以必须用v-on绑定 -->
                        购买数量: <inputNumber v-on:dataObj="getInputNumber" v-bind:goosId="goosinfo.id" class="butn"></inputNumber>
                         <!-- 购物球 -->
                        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
                           <div v-show="show" class="shopBall" v-text="this.inputNumberCount"></div>
                        </transition>
                   </li>
                   <li>
                       <mt-button type="primary" size="small">立即购买</mt-button>
                       <mt-button type="danger" size="small" @click="toShopCar">加入购物车</mt-button>
                   </li>
               </ul>
           </div>
       </div>
       <div class="params">
            <h4>商品参数</h4>
            <ul>
              <li>商品货号：{{goosinfo.goods_no}}</li>
              <li>库存情况：{{goosinfo.stock_quantity}}</li>
              <li>上架时间：{{goosinfo.add_time | dataFmt("YYYY-MM-DD")}}</li>
            </ul>
       </div>
       <div class="btn">
          <router-link v-bind="{to:'/goods/goodsinfo/'+id}">
              <mt-button type="primary" size="large">图文详情</mt-button>
          </router-link>  
          <router-link v-bind="{to:'/goods/goodscomment/'+id}">          
              <mt-button type="danger" size="large">评论详情</mt-button>
          </router-link>
       </div>
       
   </div>  
</template>

<script>
   import slider from  "../../subcom/slider.vue";
   import inputNumber from "../../subcom/inputNumber.vue";
   import { Toast } from 'mint-ui';
   import {saveNumber,getTop,getLeft} from "../../kit/localStorageTool.js";

   export default{   
        data(){
            return {
                id:0,
                slideList:[],
                goosinfo:[],
                inputNumberCount: 1,   //定义 点击准备加入购买数量 .先默认为1
                show: false
            }
        },
        components:{
           
           slider,inputNumber
        
        },
        created(){
            this.id = this.$route.params.id;
            this.getBuyImg();
            this.getParqams();
        },
        mounted(){
          //把徽章的坐标存到内存中
          var badeg = document.querySelector(".mui-badge");
          localStorage.setItem("badegLeft",getLeft(badeg));
          localStorage.setItem("badegTop",getTop(badeg));
        },
        methods:{
          
           //获取子组件传过来的count值
           getInputNumber(input){ 
               
               this.inputNumberCount = parseInt(input.split(":")[1]); //让本页面的数量等于子组件传过来的count值
           },
           //加入购物车
           toShopCar(){ 
           
            this.show = true;
               //因为我要把数据存成对象格式,所以这里是获取对象形式,以id方法存储每一项,方便后面使用
                          //   87:{
                          //     id:87,
                          //     count:1,
                          //     title:标题,
                          //     price:"100"
                          //   }
              
               saveNumber(this.goosinfo,this.inputNumberCount); //localStorageTool.js把上面方法做了封装             
                
           },
           beforeEnter(el){
               el.style.transform = "translate(0px,0px)";
           },
           enter(el,done){
               el.offsetWidth;
               //从内存中奖徽章的坐标取出来,要考虑屏幕的滚动
               var targetX = localStorage.getItem("badegLeft")-getLeft(el);
               var targetY = localStorage.getItem("badegTop")-(getTop(el)-window.scrollY);
               el.style.transform = "translate("+targetX+"px,"+targetY+"px)";
               done();
           },
           afterEnter(el){
               this.show = false;
               //window.eventBus = vm的全局对象.谁监听了这个事件 ,就可以获取这个事件对应的数据
               window.eventBus.$emit("carUpNumber","");
           },
               
           getBuyImg(){ //图片

                   // 因为图片问题用到假数据
                     var imgUrl = [
                                                         
                                {"img":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1689700990,419513012&fm=26&gp=0.jpg"},
                                {"img":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2502936258,1876554473&fm=26&gp=0.jpg"},
      
                                {"img":"https://res.vmallres.com/pimages/temp/product/201610181621243875471.jpg"},
                                {"img":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1101512791,1530846999&fm=26&gp=0.jpg"}                               
                            ];
                  
                     this.slideList = imgUrl;
              },
              //参数
              getParqams(){
                     
                     var url = this.$urlPrefix + "/api/goods/getinfo/" + this.id;
                     
                      this.$http.get(url).then(function(response){
                 
                            var body = response.body;
        
                            if(body.status!=0){
                               Toast(body.message);
                               return;
                            }
                             
                            this.goosinfo = body.message[0];

                     })
              }

           } 
   }
</script>
     
<style scoped>
  
   .swiper {
     border-radius: 15px;
     border: 1px solid #ccc;
     margin-top: 5px;
   }
    #routerView {
       padding: 5px;
    }
    .sprice,.params {
       padding: 0 10px;
       border: 1px solid #ccc;
       border-radius: 8px;
       margin: 10px 0;
    }
    .sprice>h4,.params>h4 {
      line-height: 30px;
      color: #0094ff;
      font-weight: 500;
      border-bottom: 2px solid #ccc;
    }
    .sprice>div>ul{
      padding-left: 0;
    }
     .sprice>div>ul>li,.params>ul>li {
        list-style: none;
        margin-top:  15px;
     }
     .sprice>div>ul>li:first-of-type>span {
        display: inline-block;
        margin-left: 40px;
     } 
     .sprice>div>ul>li>.butn { 
       display: inline-block;
       margin-left: 10px;     
     }
     .sprice>div>ul>li:nth-of-type(2){
       position: relative;
     }
     .mint-button--small {
        height: 28px;
     }
     .mint-button--primary,.mint-button--danger {
        margin-bottom: 10px;
     }
     .shopBall {
       width: 15px;
       height: 15px;
       border-radius: 50%;
       background-color: red;
       position: absolute;
       top: 20%;
       left: 130px;
       transition:all 1s;
       z-index: 1000;
       font-size: 12px;
       text-align: center;
       line-height: 15px;
       color: #fff;
     }
</style>