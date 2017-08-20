//1.0导入vue核心包
import Vue from "vue";
// 引入vue-route包
import VueRouter from "vue-router";

//在vue中使用路由
Vue.use(VueRouter);


//2.0导入App.vue的vue对象
import App from "./App.vue";
//导入组件
import login from "./components/account/login.vue";
import register from "./components/account/register.vue";

//引入全局mint-ui
import Mint from 'mint-ui';
import "mint-ui/lib/style.min.css";

Vue.use(Mint);

//定义路由规则
var router = new VueRouter({
    routes:[
       {path: "/login",component:login},
       {path: "/register",component:register}
    ]
});
 
//引入mui中的css
import  "../statics/mui/css/mui.css";

//利用vue对象进行解析渲染
new Vue({
    el:"#app",
    router: router,
    //接收传过来的App对象
    // render:function(creat){creat(App)}; //es5的写法
    render: creat=>creat(App)//es6的写法,goes to语法 箭头函数 =>左边是参数 右边是函数方法体
});