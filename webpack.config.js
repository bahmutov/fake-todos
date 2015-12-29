var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = [{
  output: {
    library: 'fakeTodos',
    libraryTarget: 'umd',
    path: './dist',
    filename: 'fake-todos.js'
  },
  entry: {
    'fake-todos': './src/index'
  }
}, {
  output: {
    path: './dist',
    filename: 'demo-app.js'
  },
  entry: {
    'demo-app': './src/demo-app'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('demo-app.css', {
      allChunks: true
    })
  ]
}]
