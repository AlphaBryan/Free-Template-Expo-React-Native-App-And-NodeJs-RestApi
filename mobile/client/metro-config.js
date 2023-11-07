const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      '@babel/preset-env': path.resolve(__dirname, 'node_modules/@babel/preset-env'),
    },
  },
  transformer: {
    babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
  },
};
