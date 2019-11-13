const path   = require('path');
const src    = path.resolve(__dirname, "src");
const dist   = path.resolve(__dirname, "dist");
function buildConfig(env, args){

	const { mode } = args;

	let modeOptions;
	switch(mode){
		case "development":
			modeOptions = {
				mode: "development",
				devServer: {
					contentBase: "./dist",
					historyApiFallback: true
				},
				output: {
					filename: "bundle.js",
					path: dist,
					publicPath: "/"
				},
			};
			break;
		case "production":
		default:
			modeOptions = {
				mode: "production",
				output: {
					filename: "bundle.js",
					path: dist,
					publicPath: "./"
				}
			};
			break;
	}

	return {
		entry: `${src}/index.js`,
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_nodules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: [
								"@babel/preset-react"
							]
						}
					}
				},
				{
					test: /\.scss$/,
					use: [
						{
							loader: "style-loader",
							options: {
								injectType: "singletonStyleTag"
							}
						},
						{
							loader: "css-loader",
							options: {
								modules: {
									localIdentName: "[folder]__[local]",
								},
								url: false
							}
						}, {
							loader: "sass-loader"
						}
					]	
				},
			]
		},
		resolve: {
			alias: {
				"SHARED":     `${src}/shared`,
				"COMPONENTS": `${src}/components`
			}
		},
		...modeOptions,
	}
}

module.exports = buildConfig;