// const {sassPlugin} = require("esbuild-sass-plugin");
// const esbuild = require("esbuild");
import {sassPlugin} from "esbuild-sass-plugin";
import esbuild from "esbuild";
import TsconfigPathsPlugin from "@esbuild-plugins/tsconfig-paths";

esbuild
  .build({
    entryPoints: ["server/server.tsx"],
    bundle: true,
    outfile: "built/server.js",
    plugins: [sassPlugin(), TsconfigPathsPlugin({tsconfig: "./tsconfig.json"})],
    platform: "node",
  })
  .catch((error: String) => {
    console.error("error:", error);
    process.exit(1);
  });
