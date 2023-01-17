const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { webpack } = require('webpack');
module.exports = {
    mode : 'development',
    entry : {
      bundle: path.resolve(__dirname,'./src/index.js')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name][contenthash].js', 
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port : 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test :/\.css$/,
                use : ['style-loader','css-loader'],

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title : 'webpack App',
            filename: 'index.html',
            template: 'src/template.html',
        }), 
    ],
}
