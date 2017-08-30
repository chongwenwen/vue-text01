<template>
   <div>
       <div class="btn" @click="cutNumder"> - </div>
       <div class="btn" v-text="count"></div>
       <div class="btn" @click="addNumder"> + </div>
   </div>  
</template>

<script>
   
   export default{ 
       props:["initCount","goosId"],  
       //接收父组件从内存获取到的初始数量值显示在本页面
       data(){
          return {
               count: 1
          }
       },
       methods:{
              
              addNumder(){
                  
                  this.count++;
                  this.setMessage();
              },
              cutNumder(){
                  
                  if(this.count<=1){
                     this.count=1;
                     return;
                  }   
                    this.count--;

                  this.setMessage();               
              },
              setMessage(){

                  this.$emit("dataObj",this.goosId+":"+this.count);
              }
       },
       created(){
        //初始默认值是1,当购物车给有数据了,这里才更新
              if(this.initCount){
                   
                  this.count = this.initCount;
              }   
       }
   };
</script>

<style scoped>
    .btn {
        height: 20px;
        line-height: 20px;
        padding:  0 10px;
       /* border: 1px solid #ccc;*/
        display: inline-block;
        font-size: 14px;
        border-radius: 3px;
        background-color: #eee;
     }
</style>