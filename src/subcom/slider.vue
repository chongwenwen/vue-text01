<template>  
   <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imgs"><img v-bind:src="item.img"></mt-swipe-item>
   </mt-swipe>
</template>

<script>
   
   export default{ 
     
      props:["imgs"]
   };
</script>

<style scoped>
    .mint-swipe {
        height: 300px;
        width: 100%;
    }
    .mint-swipe-item>img {
         width: 100%;
         height: 100%;
    }
</style>