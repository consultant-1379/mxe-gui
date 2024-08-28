module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    autoprefixer: {
      browsers: ['last 1 version'],
    },
    cssnano: {},
  },
};
