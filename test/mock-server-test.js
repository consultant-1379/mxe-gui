const express = require('express');
const path = require('path');

module.exports = (app) => {
  /**
   * for running tests
   */
  app.use('/mocha.css', express.static(path.join(__dirname, '../node_modules/mocha/mocha.css')));
  app.use('/mocha.js', express.static(path.join(__dirname, '../node_modules/mocha/mocha.js')));

  /**
   * polyfills
   */
  app.use(
    '/webcomponents-lite.js',
    express.static(
      path.join(
        __dirname,
        '../node_modules/@eui/container/target/package/polyfills/webcomponents-lite.js'
      )
    )
  );
};
