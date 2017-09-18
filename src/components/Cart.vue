<template>
    <div id="routerView">
        <div class="row" v-for="(item,key) in datalist">
            <!-- v-model插件规定的绑定状态 true/false 这里我们假设给他每一项设置一个选中状态属性好判断-->
            <mt-switch class="switch" v-on:change="getTotalMoney" v-model="item.checked"></mt-switch>             
            <img class="img" src="../../statics/images/9.jpg">
            <div class="inforight">
                <h4 v-text="item.title"></h4>
                <div class="bottom">
                    <ul>
                        <li>￥{{item.price}}</li>
                        <li>购买数量:
                            <inputNumber class="ipt" v-on:dataObj="getNewCount" v-bind:goosId="item.id" v-bind:initCount="item.count">                                
                            </inputNumber>
                        </li>
                        <li><a href="javascript:;">删除</a></li>
                        <!-- @click="deletList(key,item.id)" -->
                    </ul>
                
                </div>
            </div>
        </div>
        <div class="titlePrice">
            <h4>总价(不含运费):</h4>
            <p>已勾选商品{{count}}件,总价¥{{amount}}元</p>
            <mt-button type="danger" size="small" class="btn">去结算</mt-button>
        </div>
    </div>
</template>

<script>
import inputNumber from "../subcom/inputNumber.vue";
import {getAll,updateTo,deleteItem} from "../kit/localStorageTool.js"
    export default{
        components:{
            inputNumber
        },
        data(){
            return {      
                datalist:[],
                count:0,
                amount:0
            }
        },
        created(){

            this.datalist = getAll();//获取服务器的总数据

            for(var key in this.datalist){

                this.datalist[key].checked = false; //设置按钮默认关闭
            }
        },
        methods:{
            getNewCount(input){
                //console.log(input);可以获取到每一项id对应的数量
                //88:7
                //89:2
                //89:1
                var gId = input.split(":")[0];
                //split 以:分割返回新的字符串
                var newNumber = parseInt(input.split(":")[1]);
                updateTo(gId,newNumber);

                this.datalist[gId].count = newNumber; //把从内存获取的数据更新

                //点击加减更新总数和总价格
                this.calc();
            

                //哪里发送这个事件,调用这个事件的就会自动执行,不需要传值,作用是发了一个通知,通知我改变了
                 window.eventBus.$emit("carUpNumber","");
            },
            //获取购物车数量个总价
            getTotalMoney(){
                
                this.calc();
            },
            //计算的意思
            calc(){
                var totalCount = 0;
                var totalMoney = 0;
                
                for(var key in this.datalist){
                    
                    var item = this.datalist[key];
                    
                    if(item.checked==true){

                       totalCount += item.count;
                       totalMoney += parseInt(item.count)*parseInt(item.price);
                    }
                }
                this.count = totalCount;
                this.amount = totalMoney;
            }
            // //删除当前行
            // deletList(key,id){
            //     console.log(id);
            //     // 删除datalist就自然不会遍历少一项
            //     // 移除内存的这一项对应的所有值
            //     // index对应的这一项移除
            //     var list = this.datalist;
            //      list.splice(key,1);                  

            //     deleteItem(id);           
            //     // for(var key in this.datalist){
            //     //   var item = this.datalist[key]; 
            //     //    if(key == id){                      
            //     //    }
            //     // }
                
            // }
        }
    }
</script>

<style scoped>
    .titlePrice {
         background-color: #eee;
         position: relative;
         padding: 10px;
         margin-top: 10px;
    }
    .titlePrice>h4 {
        font-size: 14px;
        line-height: 20px;
    }
    .titlePrice>h4,.titlePrice>p {
        color: #000;
    }
    .titlePrice .btn {
        position: absolute;
        top:50%;
        right: 25px;
        transform: translateY(-50%);
    }
    .row{
        border-bottom: 1px solid rgba(0,0,0,0.3);
        height: 102px;
        display: flex;
    }

    .switch{
        flex:0 0 52px;
        margin-left: 10px;
    }
    .img{
        margin: 13px 10px;
        height: 75px;
        width: 75px;
        /*flex: 0 0 85px;*/
    }

    .inforight{
        margin-left: 5px;
        flex:1;
    }
    .inforight ul{
        padding-left: 0px;
        -webkit-margin-before: 10px;
        height: 21px;
        overflow:hidden; 
    }
    .inforight li{
        list-style: none;
        display: inline-block;
        height: 21px;
        overflow:hidden;
    }
    .inforight li:nth-of-type(2),.inforight li:last-of-type{
       font-size: 14px;
    }
    .inforight li:nth-of-type(2)>.ipt {
        float: right;
        margin-left: 10px;
        margin-right: 30px;
    }
    .inforight h4{
        color: #0094ff;
        font-size: 14px;
        font-weight: normal;
        height: 40px;
        line-height: 20px;
        overflow: hidden;
    }

    .bottom li:first-child{
        color:red;
        margin-right: 10px;
    }

    .bottom li:last-child{
        margin-left: 10px;
    }

    .inforight[data-v-d5baa734] {
        padding-top: 10px;
    }
</style>