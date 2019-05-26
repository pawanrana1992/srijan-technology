const {
    override,
    addLessLoader,
    addPostcssPlugins
} = require("customize-cra");



module.exports = override(
    addPostcssPlugins([require('autoprefixer')]),
    addLessLoader({
        javascriptEnabled: true,
        strictMath: true,
        noIeCompat: true,
        async: true,
        useFileCache: false,
    }),
);