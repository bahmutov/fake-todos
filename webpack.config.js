module.exports = {
  output: {
    library: 'fakeTodos',
    libraryTarget: 'umd',
    path: './dist',
    filename: 'fake-todos.js'
  },
  entry: {
    library: './src/index'
  }
}
