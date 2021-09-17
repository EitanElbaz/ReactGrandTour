const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const libraryName = 'react-grand-tour';

module.exports = function (env) {
    let dev = false;
    let target = 'node';
    let filename = '[name].js';
    let outputPath = path.resolve(__dirname, 'build');
    if (env) {
        if (env.dev) {
            dev = true;
        }
    }

    let config = {
        NODE_ENV: dev ? JSON.stringify('development') : JSON.stringify('production'),
        dev: dev,
    };

    return {
        mode: 'production',
        target: target,

        entry: {
            index: ['./src/index'],
        },

        cache: true,

        output: {
            path: outputPath,
            filename: filename,
            library: libraryName,
            libraryTarget: 'umd',
            umdNamedDefine: true,
        },

        optimization: {
            minimize: true,
            runtimeChunk: false,
        },

        // Enable sourcemaps for debugging webpack's output.
        devtool: 'source-map',

        externals: [
            {
                react: {
                    commonjs: 'react',
                    commonjs2: 'react',
                    amd: 'React',
                    root: 'React',
                },
                'react-dom': {
                    commonjs: 'react-dom',
                    commonjs2: 'react-dom',
                    amd: 'ReactDOM',
                    root: 'ReactDOM',
                },
            },
        ],

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
            unsafeCache: true,
            plugins: [new TsconfigPathsPlugin()],
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['source-map-loader'],
                    enforce: 'pre',
                },
                {
                    test: /\.ts$|\.tsx$/,
                    loader: 'ts-loader',
                },
            ],
        },

        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                'process.env': config,
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,
                defaultSizes: 'gzip',
            }),
        ],
    };
};
