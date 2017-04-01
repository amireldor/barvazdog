const webpack = require('webpack')
const path = require('path')

const PRODUCTION = process.env.PRODUCTION !== undefined

let plugins = []
if (PRODUCTION) {
    console.log("Production flag enabled!")

    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {}
    }))
} else {
    console.log("Development build")
}

module.exports = {
    entry: ['./src/main.tsx'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'script.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.styl$/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    'stylus-loader'
                ]
            },
        ]
    },
    plugins
}