const tsp = require('tsconfig-paths-webpack-plugin');
const { aliasDangerous } = require('react-app-rewire-alias/lib/aliasDangerous');

const aliasMap = {
    'react-grand-tour': '../src',
};

const webpack = function override(config) {
    config.resolve = {
        ...config.resolve,
        plugins: [new tsp({ configFile: 'paths.json' })],
    };

    config = aliasDangerous(aliasMap)(config);
    return config;
};
module.exports = { webpack };
