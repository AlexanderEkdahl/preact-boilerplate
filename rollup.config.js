import { minify } from "uglify-js";
import nodeResolve from "rollup-plugin-node-resolve";
import serve from "rollup-plugin-serve";
import typescript from "rollup-plugin-typescript";
import uglify from "rollup-plugin-uglify";

const configuration = {
  entry: "src/index.tsx",
  dest: "build/bundle.js",
  sourceMap: true,
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
    nodeResolve({ jsnext: true, main: true, browser: true }),
  ],
};

if (process.env.PRODUCTION) {
  configuration.plugins.push(
    uglify({
      mangle: {
        toplevel: true,
      },
    }, minify)
  );
}

if (process.env.DEV) {
  configuration.plugins.push(
    serve({
      contentBase: "build",
      historyApiFallback: false,
      port: 8080
    })
  );
}

export default configuration;
