// webpack.config.js
module.exports = {
    // ... other configuration options
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        // Add a loader for styles or CSS
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        // ... other rules
      ]
    },
    // ... other webpack options
  };
  