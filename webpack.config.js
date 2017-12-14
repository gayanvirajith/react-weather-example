module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.js',
            Nav: 'app/components/Nav.js',
            Weather: 'app/components/Weather.js',
            About: 'app/components/About.js',
            Example: 'app/components/Example.js',
        },
        extentions: ['', '.js', 'jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
}