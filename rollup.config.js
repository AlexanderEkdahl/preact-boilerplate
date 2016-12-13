import typescript from "rollup-plugin-typescript";
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import serve from 'rollup-plugin-serve'

const configuration = {
  entry: "src/index.tsx",
  dest: "build/bundle.js",
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
    nodeResolve({ jsnext: true, main: true, browser: true }),
  ],
};

if (process.env.PRODUCTION) {
  configuration.plugins.push(
    uglify({}, minify)
  );
}

if (process.env.DEV) {
  configuration.plugins.push(
    serve({
      contentBase: 'build',
      historyApiFallback: false,
      port: 8080
    })
  );
}

export default configuration;
