const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
  // Fort nodeJs
  target: "node",
  // Root file
  entry: "./src/index.js",
  // Output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};

module.exports = merge(baseConfig, config);
