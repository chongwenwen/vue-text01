<template>
   <div id="routerView">
      
        <div v-for="item in goodinfo">
            <div class="goostitle"> 
                 <h4 v-text="item.title"></h4>
            </div>
            <div class="content" v-html="item.content"></div>
        </div>
        
   </div>  
</template>

<script>
   import { Toast } from 'mint-ui';
   export default{   
        data(){
            return {
                id:0,
                goodinfo:[]
            }
        },
        created(){
            this.id = this.$route.params.id;
            this.getdetail();
        },
        methods:{

            getdetail(){

                var url = this.$urlPrefix + "/api/goods/getdesc/"+this.id;
                this.$http.get(url).then(function(response){
                 
                      var body = response.body;
                      if(body.status!=0){
                         Toast(body.message);
                         return;
                      }
                       console.log(body.message);
                       this.goodinfo = body.message;
                })
            }        
       }
};
</script>

<style scoped>
  
   .goostitle{
       margin-top: 40px;
       padding: 10px 5px;
   }
   .goostitle>h4 {
       color: #0094ff;
   }
   .content {
       padding: 10px;
       width:100%;
   }
   .content>.center>img {
      width: 100%;
   }

</style>