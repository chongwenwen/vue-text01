//1.0导入vue核心包
import Vue from "vue";

//2.0导入App.vue的vue对象
import App from "./App.vue";

//引入全局mint-ui
import Mint from 'mint-ui';
import "mint-ui/lib/style.min.css";
Vue.use(Mint);

// 引入vue-route包
import VueRouter from "vue-router";
//在vue中使用路由
Vue.use(VueRouter);

//引入moment
import moment from "moment";

//自定义过滤器
Vue.filter("dataFmt",function(input,fmtString){
    return moment(input).format(fmtString);  
})

//抽取公共样式
Vue.prototype.$urlPrefix = "http://139.199.192.48:8888";
// http://139.199.192.48:8888/api/postcomment/43

//导入组件
import home from "./components/home.vue";
import member from "./components/Member.vue";
import cart from "./components/Cart.vue";
import search from "./components/Search.vue";
import news from "./components/news/newlist.vue";
import newsinfo from "./components/news/newsinfo.vue";
import photo from "./components/photo/photolist.vue";
import photoinfo from "./components/photo/photoinfo.vue";
import goods from "./components/goods/goodslist.vue";



//导入全局css
import  "../statics/css/site.css";

//引入mui中的css
import  "../statics/mui/css/mui.css";

//引入请求包vue-resource
import vueResource from "vue-resource";
Vue.use(vueResource);

//公共url抽取
Vue.prototype.$urlPrefix = "http://139.199.192.48:8888";


//定义路由规则
var router = new VueRouter({

    linkActiveClass:"mui-active",  //设置点击状态样式
    routes:[
       {
            path: "/",
            redirect:"/home"
       },
       {
            path: "/home",
            component:home
       },
       {
            path: "/member",
            component:member
       },
       {
            path: "/cart",
            component:cart
       },
       {
            path: "/search",
            component:search
       },
       {
            path: "/news/newlist",
            component:news
       },
       {
            path: "/photo/photolist",
            component:photo
       },
       {
            path: "/goods/goodslist",
            component:goods
       },
       {
            path: "/news/newsinfo/:id",
            component:newsinfo
       },
       {
            path:"/photo/photoinfo/:id",
            component:photoinfo
       }
    ]
});


//利用vue对象进行解析渲染
new Vue({
    el:"#app",
    router: router,
    //接收传过来的App对象
    // render:function(creat){creat(App)}; //es5的写法
    render: creat=>creat(App)//es6的写法,goes to语法 箭头函数 =>左边是参数 右边是函数方法体
});