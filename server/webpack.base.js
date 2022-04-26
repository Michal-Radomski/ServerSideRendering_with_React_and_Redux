module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        // test: /\.js$/, //* For .js files only
        test: /\.(jsx|js)?$/, //* For .jsx|.js files
        use: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["react", "stage-0", ["env", {targets: {browsers: ["last 2 versions"]}}]],
        },
      },
    ],
  },
};
