/**
 * Created by Administrator on 2017/6/15.
 */
var path=require('path');
var webpack=require('webpack');


module.exports={
    context:path.resolve(__dirname,'src'),
    entry:[
        'react-hot-loader/patch',
        // 开启 React 代码的模块热替换(HMR)

        'webpack-dev-server/client?http://localhost:8080',
        // 为 webpack-dev-server 的环境打包代码
        // 然后连接到指定服务器域名与端口

        'webpack/hot/only-dev-server',
        // 为热替换(HMR)打包好代码
        // only- 意味着只有成功更新运行代码才会执行热替换(HMR)


        './todos/index.js'
        // 我们 app 的入口文件
    ],
    output:{
        filename: 'bundle.js',
        // 输出的打包文件

        path: path.resolve(__dirname, 'dist'),

        publicPath: '/'
        // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)
    },

    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        // 开启服务器的模块热替换(HMR)

        contentBase: path.resolve(__dirname, 'dist'),
        // 输出文件的路径

        publicPath: '/'
        // 和上文 output 的“publicPath”值保持一致
    },

    module: {
        rules: [
        {
            test: /\.jsx?$/,
            use: [ 'babel-loader', ],
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换(HMR)

        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    ],
}