const path = require("path");

module.exports = {
  // Fort nodeJs
  target: "node",
  // Root file
  entry: "./src/index.js",
  // Output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js$/, //* For .js files only
        // test: /\.(jsx|js)?$/, //* For .jsx|.js files
        use: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["react", "stage-0", ["env", {targets: ["last two versions"]}]],
        },
      },
    ],
  },
};
