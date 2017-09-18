<template>
   <div class="comment-min">
       <div class="postcom">
           <div class="title">
               <h4>提交评论</h4>
               <span>返回</span>
           </div>
           <textarea placeholder="请输入评论内容..." v-model="cominfo"></textarea>
           <mt-button type="primary" size="large" @click="postinfo">发表评论</mt-button>
       </div>
       <div class="comlist">
           <div class="title">
               <h4>评论列表</h4>
               <span>{{comlist.length}}条评论</span>
           </div>
           <div class="list" v-for="(item,index) in comlist">
               <div class="listName">
                   <span>{{index+1}}楼</span>
                   <span>{{item.user_name}}</span>
                   <span>{{item.add_time | dataFmt("YYYY-MM-DD HH:mm:ss")}}</span>
               </div>
               <ul>
                   <li>{{item.content}}</li>
               </ul>              
           </div>
           <button type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined" @click="getmore">加载更多</button>
       </div>
   </div>  
</template>

<script>
   import { Toast } from 'mint-ui'; //引入提示信息
   export default{  

       props: ["id"], //这里直接是通过id属性来获取父组件传过来的值,相当于data中这个时候存在这个id属性
       data(){
          return {
            cominfo: "",
            comlist:[],
            pageindex: 1
          }
       },
       created(){
           this.getlistinfo(this.pageindex);
       },
       methods:{
            
            //提交评论请求
           postinfo(){
               
               if(this.cominfo.trim().length <=0){//trim()去空格
                   Toast("评论内容不能为空!");
                   return;
               }
               
               var url = this.$urlPrefix+"/api/postcomment/"+this.id;
            
               
               this.$http.post(url,{content:this.cominfo},{emulateJSON:true}).then(function(response){
                     
                     var body = response.body;
                     
                     Toast(body.message);  //提交成功提示
                    
                     //把用户提交的显示在第一个
                     this.comlist = [{
                                        "user_name": "匿名用户",
                                        "add_time": new Date(),
                                        "content": this.cominfo
                                    
                                    }].concat(this.comlist);

                     this.cominfo = "";
               })
           },
           //获取评论信息
            getlistinfo(pageindex){ 
            //pageindex在created里面已经通过this.pageindex传参了
               pageindex = pageindex || 1; //设置默认样式,没有就显示第一页
               var url = this.$urlPrefix+"/api/getcomments/"+this.id+"?pageindex="+pageindex;
               this.$http.get(url).then(function(response){
                    var body = response.body;
                    
                    if(body.status!=0){
                         Toast(body.message);
                         return;
                    }
                   
                    var arr = body.message //用一个新数组接收
                    this.comlist = this.comlist.concat(arr); //把新数组和原来的合并.实现追加
               }) 
            },
            getmore(){
                 this.pageindex++;
                 this.getlistinfo(this.pageindex);
                 console.log(this.pageindex);
            }

       }

   };
</script>

<style scoped>
    .comment-min{
       padding: 8px;
    }
    .postcom>.title,.comlist>.title {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #aaa;
        margin-bottom: 5px;
        overflow: hidden;
    }
    .postcom>.title>h4,.comlist>.title>h4{
        float: left; 
        margin-top: 15px;
        font-weight: 500;
        margin-left: 5px;
    }
    .postcom>.title>span,.comlist>.title>span {
        float: right;
        margin-right: 10px;
        color: #007aff;
        line-height: 50px;
    }
    .postcom textarea {
        height: 100px;
        border-radius: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
        background-color: #fcfcfc;
    }
    .comlist>.list {
        border-bottom: 1px dashed #ccc;
    }
    .comlist>.list>ul {
        padding-left:0;
    }
    .comlist>.list>ul>li {
        list-style: none;  
        font-size: 16px; 
    }
    .comlist>.list>.listName {
        margin-top: 10px;
        background-color: #eee;
    }
    .comlist>.list>.listName>span {
        font-size: 14px;
        color: gray;
    }
    .mui-btn-block {
        margin-bottom: 0;
        padding: 5px;
        margin-top: 5px;
        border-radius: 5px;
    }
</style>