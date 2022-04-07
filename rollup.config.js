import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import {terser} from "rollup-plugin-terser";
import renameNodeModules from "rollup-plugin-rename-node-modules";

const commonPlugins = [
    external(),
    postcss({
        modules: true,
    }),
    babel({
        babelHelpers: "runtime",
        exclude: 'node_modules/**',
        extensions: [".js", ".jsx", 'css', 'scss'],

    }),
    resolve({
        extensions: ['.mjs', '.js', '.json', '.jsx',]
    }),
    commonjs(),
    terser(),
    renameNodeModules("ext")
]

const commonStylePlugins = [
    external(),
    postcss({
        modules: false,
    }),
    babel({
        babelHelpers: "runtime",
        exclude: 'node_modules/**',
        extensions: [".js", ".jsx", 'css', 'scss'],
    }),
    resolve(),
    commonjs(),
    terser(),
]

export default [
    {
        input: 'src/index.js',
        preserveEntrySignatures: 'strict',
        output: [{
            dir: 'dist',
            format: 'esm',
            preserveModules: true,
            preserveModulesRoot: 'src',
            exports: "named",
            // sourcemap: true
        },],
        plugins: [
            ...commonPlugins
        ],
    },
    {
        input: 'src/fonts/NemuruIconFont/index.scss',
        output: [{
            file: 'dist/fonts/NemuruIconFont/index.js',
            format: 'cjs',
        },],
        plugins: [...commonStylePlugins],
    },
    {
        input: 'src/main-theme.scss',
        output: [{
            file: 'dist/main-theme.js',
            format: 'cjs',
        },],
        plugins: [...commonStylePlugins],
    },
    {
        input: 'src/style/global.scss',
        output: [{
            file: 'dist/style-global.js',
            format: 'cjs',
        },],
        plugins: [...commonStylePlugins],
    },
    {
        input: 'src/style/helpers.scss',
        output: [{
            file: 'dist/style-helpers.js',
            format: 'cjs',
        },],
        plugins: [...commonStylePlugins],
    },
    {
        input: 'src/style/extra.scss',
        output: [{
            file: 'dist/style-nemuru.js',
            format: 'cjs',
        },],
        plugins: [...commonStylePlugins],
    },
];
