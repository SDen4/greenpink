const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: "assets/",
    admin: "admin/"
}

const PAGES_DIR = `${PATHS.src}/pug/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(filename => filename.endsWith('.pug'));



module.exports = {
    externals: {
        paths: PATHS
    },

    entry: {
        "app": PATHS.src,
        "admin": "./src/admin/main.js"
    },
    output: {
        path: PATHS.dist,
        // filename: `${PATHS.assets}js/[name].js`,
        filename: (pathData) => {
            return pathData.chunk.name === "app" ? `${PATHS.assets}js/[name].js` : `${PATHS.admin}js/[name].js`
        },
        publicPath: "",
    },
    module: {
        rules: [{
            test: /\.pug$/,
            oneOf: [{
                resourceQuery: /^\?vue/,
                use: ["pug-plain-loader"]
            }, {
                use: ['html-loader', 'pug-html-loader']
            }]
        },{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: "/node_modules/"
        },{
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        "@babel/plugin-transform-react-jsx",
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            }
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: "file-loader",
            options: {
                name: "[name].[ext]"
            }
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },
                {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: {path: `${PATHS.src}js/postcss.config.js}`}}
                },
                {
                    loader: "sass-loader",
                    options: {sourceMap: true}
                }
            ],
        },
        {
            test: /\.css$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },
                {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: {path: `${PATHS.src}js/postcss.config.js}`}}
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        new CopyWebpackPlugin([
            {from: `${PATHS.src}/images`, to: `${PATHS.assets}images`},
            {from: `${PATHS.src}/static`, to: ""}

        ]),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`,
            chunks: ["app"]
        })),
        new HtmlWebpackPlugin({
            template: "src/admin/index.pug",
            filename: `${PATHS.admin}/index.html`,
            chunks: ["admin"]
        })
    ]
}