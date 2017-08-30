/**
    * Created by zhongwenwen on 2017/8/18.
*/

var htmlWP = require("html-webpack-plugin");//引入组件
module.exports={  //module.组件.模块
    entry:"./src/main.js",//指定需要打包的人口文件
    output:{
        path: __dirname+"/dist",//这是一个绝对路径,__dirname目录名--表示当前js文件所在的文件夹.
        filename: "build.js"
    },
    module:{
        loaders:[
            {
               test: /\.css$/,//打包css文件
               loader: "style-loader!css-loader"
            },
            {
               test:/\.scss$/,//打包sass文件
               loader: "style-loader!css-loader!sass-loader"
            },
            {
                test:/\.less$/,//打包sass文件
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test:/\.(png|jpg|gif|ttf|svg)$/,//打包sass文件
                loader: "url-loader?limit=20000"  //小于40k的就打包到build.js中.大于40k的就放到磁盘上,图片地址还是保存在build.js中
            },
             //webpack2.0和3.0不需要了
            // {
            //     test:/\.js$/,//js中es6转es5
            //     loader: "babel-loader",
            //     exclude:/node_modules/  //node_modules中本身已经有很多自动转换es5的文件,所以我们需要排除转换过的,其他的用来转换
            // },
            {
                test:/\.vue$/,//打包sass文件
                loader: "vue-loader"  //小于40k的就打包到build.js中.大于40k的就放到磁盘上,图片地址还是保存在build.js中
            }
        ]
    },
    //webpack2.0和3.0都已经支持es6转es5了.所以不需要babel这个文件了
    // babel:{
    //     presets: ["es2015"],//转换es5版本语法指令
    //     plugins: ["transform-runtime"]//配合vue开发使用,动态对vue文件进行编译  不需要vue就不需要安装
    // },
    plugins:[
        new htmlWP({
            title:"首页",
            filename:"index.html",
            template: "index1.html"
        })
    ]

};