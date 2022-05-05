// const path = require("path");
// const nodeExternals = require("webpack-node-externals");

// module.exports = {
//   entry: "./server/server.tsx",
//   target: "node",
//   externals: [nodeExternals()],
//   output: {
//     path: path.resolve("server-build"),
//     filename: "index.js",
//   },
//   resolve: {
//     extensions: [".ts", ".tsx"],
//   },
//   module: {
//     rules: [
//       // {
//       //   test: /\.js$/,
//       //   use: "babel-loader",
//       // },
//       {
//         test: /\.tsx?$/,
//         loader: "ts-loader",
//         options: {
//           configFile: "tsconfig.server.json",
//         },
//       },
//     ],
//   },
// };

// import * as path from "path";
// const nodeExternals = require("webpack-node-externals");

// module.exports = {
//   name: "server",
//   entry: {
//     server: path.resolve(__dirname, "server/server.tsx"),
//   },
//   mode: "production",
//   output: {
//     path: path.resolve("server-build"),
//     filename: "index.js",
//   },
//   resolve: {
//     extensions: [".ts", ".tsx"],
//   },

//   externals: [nodeExternals()],
//   target: "node",
//   node: {
//     __dirname: false,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         loader: "ts-loader",
//         options: {
//           configFile: "tsconfig.server.json",
//         },
//       },
//     ],
//   },
// };

const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/server.tsx",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve("server-build"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   use: "ts-loader",
      // },

      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.server.json",
        },
      },
    ],
  },
};
