<template>
   <div id="routerView">
    
        <ul>
            <li v-for="item in goodslist">
                <router-link v-bind="{to:'/goods/goodsbuy/'+item.id}">
                    <img :src="item.img_url">
                    <p v-text="item.title"></p>
                    <div class="price">
                        <p><strong style="color: red">¥{{item.sell_price}}</strong> <s>{{item.market_price}}</s></p>
                        <p>热卖中<span>剩余{{item.stock_quantity}}件</span></p>
                    </div>
                </router-link>
            </li>   
        </ul> 
        
        <mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>
            
   </div>  
</template>

<script>
   import { Toast } from 'mint-ui';
   export default{   
        data(){
            return {
                pageindex:1,
                goodslist:[]
            }
        },
        created(){
            this.getdooslist();
        },
        methods:{
            getdooslist(){
                var url = this.$urlPrefix + "/api/getgoods?pageindex=" + this.pageindex;
                 this.$http.get(url).then(function(response){
                 
                      var body = response.body;
                      if(body.status!=0){
                         Toast(body.message);
                         return;
                      }
                       var arr = body.message;
                       this.goodslist = this.goodslist.concat(arr);
                })
            },
            getmore(){
                this.pageindex++;
                this.getdooslist();
            }
        }
   };
</script>

<style scoped>
    #routerView>ul {
        padding-left: 0;
        padding: 5px;
        width: 100%;
        margin-bottom: 20px;
    }
    #routerView>ul>li {
        list-style: none;
        width: 50%;
        padding: 5px;
        border: 2px solid #ccc;
        float: left;
        background-color: #fff;
    }
    #routerView>ul>li>a>img {
        width: 100%;
    }
    #routerView>ul>li>a>p {
        height: 42px;
        overflow: hidden;
    }
    #routerView>ul>li>a>.price {
        background-color: #eee;
        padding: 2px 5px;
        border-radius: 4px;
    }
    #routerView>ul>li>a>.price>p {
        overflow: hidden;
        margin-bottom: 0;
        line-height: 30px;
    }
    #routerView>ul>li>a>.price>p>s {
        margin-left: 30px;
    }
    #routerView>ul>li>a>.price>p>span:first-of-type {
        float: right;
    }
    
    .mint-button--danger {
        margin:10px 0; 
    }
</style>