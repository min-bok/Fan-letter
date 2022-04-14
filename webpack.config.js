const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './source/index.js',
        synopsis: './source/synopsisPage.js',
        character: './source/character.js',
        test : './source/testPage.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]_bundle.js'
    }, 
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ],
    }
}