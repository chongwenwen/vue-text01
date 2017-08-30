<template>
   <div id="routerView">
       <comment v-bind:id="id"></comment>
   </div>  
</template>

<script>

   import comment from "../../subcom/comment.vue";
   
   export default{ 
       data(){
          return {
             id:0
          }
       },
       components:{
          //"comment": comment //es5写法
           comment  //es6写法
       },
       created(){

           this.id = this.$route.params.id;
           console.log(this.id);
       }
   };
</script>

<style scoped>
  
</style>