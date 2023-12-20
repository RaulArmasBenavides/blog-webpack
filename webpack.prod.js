const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const templates = [
    { template: './src/index.html', filename: './index.html', chunks: ['common','index'] },
    { template: './src/pages/about.html', filename: './about.html', chunks: ['common','about'] },
    { template: './src/pages/contacto.html', filename: './contacto.html', chunks: ['common','contacto'] },
    { template: './src/pages/articulos.html', filename: './articulos.html', chunks: ['common','articulos'] },
    { template: './src/pages/portafolio.html', filename: './portafolio.html', chunks: ['common','portafolio'] },
];

const htmlPlugins = templates.map(({ template, filename, chunks }) => 
    new HtmlWebPackPlugin({ 
        template, 
        filename, 
        chunks 
    })
);

module.exports = {
    mode: 'production',
    entry: {
        common: './src/js/common.js',
        index: './src/js/index.js',
        about: './src/js/about.js',
        contacto: './src/js/contacto.js',
        portafolio: './src/js/portafolio.js',
    },
    output: {
        clean: true,
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCssAssetsPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extrae CSS en archivos separados
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        ...htmlPlugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' },
            ]
        }),
        new CompressionPlugin() // Compresión de archivos para mejorar tiempos de carga
    ]
};