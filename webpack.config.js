const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js' 
    },
    resolve: {
        extensions: ['.js'] 
    } ,
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader' 
                }
            },
            {
                test: /\.(css)$/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader'
                  }
                ]
              }
        ]
    },
    plugins: [ 
        new htmlWebPackPlugin( 
            {
                inject: true, 
                template: './public/index.html',  
                filename: './index.html' 
            }
        ),
        new CopyWebpackPlugin(
            {
                patterns: [{ 
                    from: './src/styles/style.css',
                    to: '' 
                }],
            }
          )
    ]
     
}