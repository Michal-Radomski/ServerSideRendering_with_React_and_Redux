const path = require("path");

module.exports = {
  // Root file
  entry: "./src/client/client.js",
  // Output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js$/, //* For .js files only
        use: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["react", "stage-0", ["env", {targets: ["last two versions"]}]],
        },
      },
    ],
  },
};
