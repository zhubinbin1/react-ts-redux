//webpack node 写
let path =require("path")
let HtmlWebpackPlugin = require("html-webpack-plugin")
let Webpack = require("webpack")
module.exports={
    mode:"development",//development,production  production可进行压缩
    resolve:{//解析 第三方包common 缩小查找范围
        alias:{//别名
            "~":path.resolve(__dirname,"node_modules"),
            "@":path.resolve(__dirname)
        },
        //  ./index.js  省略写为./index,后缀省略 逐渐查找
        extensions:['.ts','.tsx',".js",'.json']
    },
    devServer:{//开发服务器的配置 webpack-dev-server   ==不配置默认以当前目录做静态目录
        // port:3000,
        hot:true,//热更新
        // progress:true,//进度条
        contentBase:"./dist",//在次文件夹做静态服务.
        historyApiFallback:{//从定向
            index:"./index.html"//dist 目录下的. webpack打包后目标目录的文件
        }
        // open:true,//自动打开浏览器
    },
    // entry:"./src/index.tsx",//入口
    entry:{
        index:"./src/index.tsx",
    },
    //源码映射,可帮助调试源代码,会生成一个source map 文件,会标示当前报错的列
    //source-map 大,全,独立.
    //evl-source-map 不会产生单独文件,可以显示行和列,会打包到home.js里
    //cheap-module-source-map 不会产生列,但是是一个单独的映射文件.
    //cheap-module-evl-source-map 不会产生文件,集成在打包后的文件中,也不会产生列,只告诉哪行,没具体哪里报错
    devtool:"source-map",//eg:home.js.map
    watch:false,//监控代码变化,一旦变化代码进行打包,测试:修改home.js
    watchOptions:{//监控选项
        poll:1000,//每秒询问1000次
        aggregateTimeout:500,//防抖,一直输入代码,写一次打包一次?500ms内打包一次.
        ignored:/node_modules/ //不需要监控的文件
    },
    output:{//打包出口 npx webpack npm run build  
        //多出口.[name].js name变量,entry名字
        filename:"boundle.js",
        path:path.resolve(__dirname,"dist"),
    },
    plugins:[//数组放所有插件--不分顺序
        new Webpack.HotModuleReplacementPlugin(),//热更新插件
        new HtmlWebpackPlugin({
            template:"./src/index.html",//模版路径
            filename:"index.html",//输出的文件名字
            }),
    ],
    module:{//模块
        rules:[//规则 执行顺序r-l b-t
            {
                test: /\.(j|t)sx?$/,
                loader: 'ts-loader',
                exclude:/node_modules/
            },
            {
                enforce:"pre",
                test: /\.(j|t)sx?$/,
                loader:"source-map-loader"
            },
            { test:/\.css$/,
                use:[
                "style-loader",
                "css-loader",
            ]},//less-css
            //处理less文件,sass,stylus node-sass sass-loader
            //stylus stylus-loader
            { test:/\.less$/,
                use:[
                "style-loader",
            "css-loader",//@import 解析路径
            "less-loader"]
            },//less-css
            {
                test:/\.(png|jpg|gif)$/,
                //可做一个限制
                use:{
                    loader:"url-loader",
                    options:{//小的话以base64存储
                        limit:1000,
                        outputPath:"/images/",//如果是base64 不会输入到此
                        esModule: false,//index.html 中引入<img src 失败问题  https://segmentfault.com/q/1010000021251426?utm_source=tag-newest
                    }
                },
            },
        ]
    }
}