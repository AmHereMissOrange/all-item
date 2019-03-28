const path=require("path");
const webpack = require('webpack');
const htmlplugin=require("html-webpack-plugin");
const extractcss=require("extract-text-webpack-plugin");
const CleanCSSPlugin = require('less-plugin-clean-css');

console.log(path.join(__dirname,'src')+"/js/createjs.js");
module.exports={
    entry: {        
            index:'./src/js/index.js'
                  },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist'),

    },
    devServer:{
      contentBase:"./dist",
      inline:true,
      port:5300
    },
    //第三方库引入
    resolve:{
      
       alias:{   //别名
        createjs:"./js/createjs.js" ,
        jquery:path.resolve(__dirname,'./src/js/jquery-1.11.1.min.js') 
      }
    },
    module: {
    rules: [
      {
        // test 表示测试什么文件类型
        test:/\.css$/,
        // 使用 'style-loader','css-loader'
        use:extractcss.extract({
            fallback:'style-loader', // 回滚
            use:[ { loader: 'css-loader'}],

            publicPath:'../' //解决css背景图的路径问题
        })
    },
    {
        test:/\.less$/,
        use:extractcss.extract({ //分离less编译后的css文件
            fallback:'style-loader',
            use:[ { loader: 'css-loader'}
            ,'less-loader'],
        })
      },

      //es6处理模块
      {
        test: /\.js$/,
        exclude: __dirname+'node_modules',
        include: __dirname+'src',
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
      //图片处理模块
      {
        test:/\.(jpg|png|jpeg)$/,
        use:'file-loader?limit=1024&name=../img/[name].[ext]'
      },
      // {
      //   test: /\.html$/,
      //   loader: 'html-widthimg-loader',
      // },
      {
        test:/\.(woff|ttf|svg|eot|woff2)$/,      //字体图标
        use:'file-loader?limit=1024&name=./fonts/[name].[ext]'    //加路径
      },
    ]
      },
    plugins:[
      new htmlplugin({
        template:"./src/index.html",
        // filename:"a.html"
        minify:{
          removeAttributeQuotes:true,  //去除引号
          removeComments:true,         //去除注释
          removeEmptyAttributes:true,  //去除空属性
      //    collapseWhitespace:true      //去除空格回车
        }
      }),
      new extractcss('./less/index.css'),
      
      new webpack.ProvidePlugin({
       $: 'jquery',
       jQuery: 'jquery'
      })
       
      //vendor的第三方库打包
      // new webpack.optimize.splitChunk({
      //   name:'vendor'
      // })     

    ]
}