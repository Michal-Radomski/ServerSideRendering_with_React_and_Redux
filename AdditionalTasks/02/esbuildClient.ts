// const {sassPlugin} = require("esbuild-sass-plugin");
// const esbuild = require("esbuild");
import {sassPlugin} from "esbuild-sass-plugin";
import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["client/index.tsx"],
    bundle: true,
    outfile: "built/app.js",
    plugins: [sassPlugin()],
  })
  .catch((error: String) => {
    console.error("error:", error);
    process.exit(1);
  });
