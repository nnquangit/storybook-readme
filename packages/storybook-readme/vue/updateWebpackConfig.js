var path = require('path');

var docsLoader = path.resolve(__dirname, 'docs-loader');

module.exports = function (config, configType) {
  config.module.rules = config.module.rules.map(function (rule) {
    if (rule.loader && rule.loader.indexOf('vue-loader') !== -1) {
      return Object.assign({}, Object.assign({}, rule, {
        options: Object.assign({}, rule.options, {
          loaders: {
            docs: [// 'storybook-readme/vue/docs-loader',
            docsLoader, 'html-loader', 'markdown-loader']
          }
        })
      }));
    }

    return rule;
  });
  return config;
};