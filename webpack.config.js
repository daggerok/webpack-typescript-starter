module.exports = {
  context: __dirname,
  entry: './src/main.ts',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
