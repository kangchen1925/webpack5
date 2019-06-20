const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    app: './app/app.js'
  },

  output: {
    path: path.resolve(__dirname + '/public')
  },

  //配置loader
  module: {

    //loader规则
    rules: [

      //css-loader
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },

      //less-loader
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader'}
        ]
      }
    ]

  }
}