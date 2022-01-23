const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.jsx',
  output: {
    publicPath: "http://localhost:8081/"
  },
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new ModuleFederationPlugin({
      name: 'hostVar',
      filename: 'remoteEntry.js', // 构建出来的文件名
      remotes: {
        // remoteVar是remote暴露出来的全局变量名
        remote: 'remoteVar@http://localhost:8080/remoteEntry.js',
      },
      exposes: {
        './Button': './src/Button.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ]
}
