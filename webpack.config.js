const path = require("path");

module.exports = {
  devtool: 'inline-source-map',
  optimization: { minimize: false },
  entry: "./src/index.js",
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
