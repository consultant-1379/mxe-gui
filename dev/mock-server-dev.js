const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const modelService = require('./services/model-service');
const flowService = require('./services/flow-service');
const modelDeploymentService = require('./services/model-deployment-service');

module.exports = (app) => {
  app.use(bodyParser.json());

  modelService(app);
  flowService(app);
  modelDeploymentService(app);
  /**
   * components
   */
  app.use(
    '/components/logo',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/components/logo')
    )
  );

  app.use(
    '/components/user-display',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/components/user-display')
    )
  );

  /**
   * panels
   */
  app.use(
    '/panels/menu-panel',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/panels/menu-panel')
    )
  );
  app.use(
    '/panels/sample-system-panel',
    express.static(
      path.join(
        __dirname,
        '../node_modules/@eui/container/target/package/panels/sample-system-panel'
      )
    )
  );
  app.use(
    '/panels/user-settings-panel',
    express.static(
      path.join(
        __dirname,
        '../node_modules/@eui/container/target/package/panels/user-settings-panel'
      )
    )
  );

  /**
   * plugins
   */
  app.use(
    '/plugins/authentication',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/plugins/authentication')
    )
  );

  /**
   * libs
   */
  app.use(
    '/libs/system.js',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/libs/system.js')
    )
  );
  app.use(
    '/libs/@eui',
    express.static(path.join(__dirname, '../node_modules/@eui/container/target/package/libs/@eui'))
  );

  /**
   * assets
   */
  app.use(
    '/assets/fonts',
    express.static(
      path.join(__dirname, '../node_modules/@eui/theme/target/package/@eui/theme/0/fonts')
    )
  );
  app.use(
    '/assets/css',
    express.static(path.join(__dirname, '../node_modules/@eui/container/target/package/assets/css'))
  );
  app.use(
    '/assets/icons',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/assets/icons')
    )
  );
  app.use(
    '/assets/img',
    express.static(path.join(__dirname, '../node_modules/@eui/container/target/package/assets/img'))
  );
  app.use(
    '/assets/favicon.ico',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/assets/favicon.ico')
    )
  );
  app.use(
    '/assets/warning_icon.svg',
    express.static(
      path.join(__dirname, '../node_modules/@eui/container/target/package/assets/warning_icon.svg')
    )
  );

  /**
   * polyfills
   */
  app.use(
    '/polyfills/webcomponents-lite.js',
    express.static(
      path.join(
        __dirname,
        '../node_modules/@eui/container/target/package/polyfills/webcomponents-lite.js'
      )
    )
  );

  app.use(
    '/components/model-list/main-container/0/config.json',
    express.static(
      path.join(__dirname, '../client/components/model-list/main-container/config.json')
    )
  );
  app.use(
    '/components/model-list/model-card/0/config.json',
    express.static(path.join(__dirname, '../client/components/model-list/model-card/config.json'))
  );
  app.use(
    '/components/model-list/sidebar/0/config.json',
    express.static(path.join(__dirname, '../client/components/model-list/sidebar/config.json'))
  );
};
