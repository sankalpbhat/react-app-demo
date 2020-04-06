var path = require('path');
import _ from './index.html';
module.exports = {
    entry: './index.jsx',
    output: {
        path: path.resolve(__dirname,'./index.html'),
        filename: 'transpiled.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      'env',
                      'react'
                    ]
                  }
                }
              }
            
        ]
    }
}


