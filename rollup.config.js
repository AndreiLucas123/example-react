import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

const DEV = process.env.ROLLUP_WATCH === 'true';

export default {
  input: './src/index.js',
  output: {
    file: './public/build/bundle.js',
    format: 'esm',
  },
  plugins: [
    scss(),
    nodeResolve({
      extensions: ['.js'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        DEV ? 'development' : 'production'
      ),
      __DEV__: DEV,
      preventAssignment: true,
    }),
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
    commonjs(),
    DEV &&
      serve({
        open: true,
        contentBase: 'public',
        port: 3000,
        historyApiFallback: true,
      }),
    DEV &&
      livereload({
        watch: 'public',
        port: 3000,
      }),
    !DEV &&
      terser({
        format: {
          comments: false,
          keep_numbers: true,
        },
      }),
  ],
};
