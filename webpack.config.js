const { resolve, join } = require('path');
module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: resolve(__dirname, './dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'awesome-typescript-loader' }
        ]
    },
    devServer: {
        port: 3000,
        static: {
            directory: join(__dirname),
        }
    },
    mode: 'development'
};