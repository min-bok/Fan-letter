const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'pulic'),
        filename: 'index_bundle.js'
    }
}