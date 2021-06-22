const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
        path: path.resolve(`${__dirname}/dist`), // 打包生成文件地址
        filename: 'index.js', // 生成文件名成名
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
                test: /\.ts$/,
                loader: 'ts-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: (file) => (
                    /node_modules/.test(file)
                  && !/\.vue\.js/.test(file)
                ),
            },
        ],
    },
}