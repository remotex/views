'use strict';

const path = require('path');
const engine = require('pug');

const defaults = {
  templates: 'pug',
  pattern: /\.pug\.json$/
};

class Views {
  constructor(config) {
    this.config = Object.assign({}, defaults, config.plugins.views);
    this.pattern = this.config.pattern;
  }

  compile({definitions: data, path: filepath}) {
    let filename, template;

    try {
      definitions = JSON.parse(definitions);
      filename = definitions.template ? `${definitions.template}.pug` : path.basename(filepath, '.json');
      template = path.join(this.config.templates, path.dirname(filepath), filename);
      console.log(template);
    }
    catch (error) {
      return Promise.reject(`${error}`);
    }

    return Promise.resolve(`module.exports = ${JSON.stringify(jade.renderFile(template, definitions))};`);
  }

  compileStatic({path: filepath}) {
    // console.log(jade.renderFile(filepath));

    return Promise.resolve(jade.renderFile(filepath));
  }
}

Views.prototype.brunchPlugin = true;
Views.prototype.type = 'template';
Views.prototype.staticExtension = 'jade';
Views.prototype.staticTargetExtension = 'html';

module.exports = Views;
