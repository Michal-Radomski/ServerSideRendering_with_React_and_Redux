const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/server.tsx",
  target: "node",
  mode: "production",
  externals: [nodeExternals()],
  output: {
    path: path.resolve("server-build"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.server.json",
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
