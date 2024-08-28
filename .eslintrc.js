module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  globals: {
    window: true,
    customElements: true,
    CustomEvent: true,
    browser: true,
    document: true,
    localStorage: true,
    mocha: true,
    describe: true,
    before: true,
    after: true,
    beforeEach: true,
    afterEach: true,
    it: true,
    __VERSION__: false,
    Event: true,
    fetch: false,
  },
  rules: {
    //disagree with these
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    //prettier with handle this. issue with indenting template literals
    indent: 0,
    //TODO - broken with JSCore currently
    'import/no-unresolved': 0,
    'import/extensions': 0,
    //reassigning CustomEvent detail is common pattern
    'no-param-reassign': 0,
    //as project is small, many files that will export multiple only export one thing
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'no-console': 0,
    'global-require': 0,
    'no-unused-vars': 0,
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': 0,
    'comma-dangle': 0,
    'arrow-parens': 0,
    'no-plusplus': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
};
