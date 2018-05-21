/* eslint-disable jsx-a11y/href-no-hash */
const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    alias: {
      "aqua": path.resolve("./.storybook/components"),
    },
  },
};
