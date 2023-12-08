const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const templates = [
    { template: './src/index.html', filename: './index.html', chunks: ['common','index'] },
    { template: './src/pages/about.html', filename: './about.html', chunks: ['common','about'] },
    { template: './src/pages/contacto.html', filename: './contacto.html', chunks: ['common','contacto'] },
    { template: './src/pages/portafolio.html', filename: './portafolio.html', chunks: ['common','portafolio'] },
];

// Creación dinámica de plugins HTML
const htmlPlugins = templates.map(({ template, filename, chunks }) => 
    new HtmlWebPackPlugin({ 
        template, 
        filename, 
        chunks 
    })
);

module.exports = {
    mode: 'development',
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
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization: {
        minimizer: [ new OptimizeCssAssetsPlugin() ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
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
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' },
            ]
        })
    ]
};