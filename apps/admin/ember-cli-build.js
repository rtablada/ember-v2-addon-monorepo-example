'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const withSideWatch = require('./with-side-watch');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    trees: {
      app: withSideWatch('app', { watching: ['../../addons/shared-ui/dist'] }),
    },
    'ember-cli-babel': { enableTypeScriptTransform: true },

    // Add options here
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    staticEmberSource: true,
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
