import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
            },
            {
                file: pkg.module,
                format: 'es',
            },
        ],
        plugins: [
            external(),
            postcss({
                modules: true,
            }),
            babel({
                exclude: 'node_modules/**',
            }),
            resolve(),
            commonjs(),
            uglify(),
        ],
    },
    {
        input: 'src/main-theme.scss',
        output: [
            {
                file: 'dist/main-theme.js',
                format: 'cjs',
            },
        ],
        plugins: [
            external(),
            postcss({
                modules: false,
            }),
            babel({
                exclude: 'node_modules/**',
            }),
            resolve(),
            commonjs(),
            uglify(),
        ],
    },
];
