const path=require("path");
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js/bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
        filename:'index.html',
        template:'index.html',
        inject:false,
        
        })
    ]
}
