const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './test/src/main.ts',
    output: {
        path: path.resolve(`${__dirname}/dist`), // 打包生成文件地址
        filename: '[name].build.js', // 生成文件名成名
    },
    resolve: {
        extensions: ['.js', '.vue', '.jsx', '.tsx', '.ts'], // 引入省略后缀名
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: (file) => (
                    /node_modules/.test(file)
                  && !/\.vue\.js/.test(file)
                ),
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        // 使用html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './test/public/index.html'),
            templateParameters(compilation, assets, options) {
                return {
                    compilation,
                    webpack: compilation.getStats().toJson(),
                    webpackConfig: compilation.options,
                    htmlWebpackPlugin: {
                        files: assets,
                        options,
                    },
                    process,
                };
            },
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
            },
            nodeModules: false,
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, './test/public'),
        compress: true, // 是否压缩
        port: 9000, // 启动服务端口
        hot: true, // 是否自动刷新
        open: false, // 是否启动服务后，自动打开浏览器
    },
}