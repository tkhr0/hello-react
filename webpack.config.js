module.exports = {
  mode: 'development',

  entry: './app/src/app.js',
  output: {
    path: `${__dirname}/app/dist/`,
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      }
    ]
  }
}
