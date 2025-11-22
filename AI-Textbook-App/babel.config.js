module.exports = function(api) {
  api.cache(true);
  return {
    env: {
      test: { // Jest environment
        presets: [
          ['@babel/preset-env', {targets: {node: 'current'}}],
          '@babel/preset-typescript',
        ]
      },
      development: {
        presets: ['babel-preset-expo']
      },
      production: {
        presets: ['babel-preset-expo']
      }
    }
  };
};
