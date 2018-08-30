'use strict';

const path = require('path');
const engine = require('pug');

const defaults = {
  path: 'pug',
  pattern: /\.pug\.json$/,
  replace: /^.*(app)/
};

class Views {
  constructor(config) {
    this.config = Object.assign({}, defaults, config.plugins.views);
    this.pattern = this.config.pattern;
  }

  compile({data, path: filepath}) {
    let filename;

    try {
      data = JSON.parse(data);
      filename = data.template ? `${data.template}.pug` : path.basename(filepath, '.json');
      filepath = path.join(path.dirname(filepath).replace(this.config.replace, this.config.path), filename);

      return Promise.resolve(`module.exports = ${JSON.stringify(engine.renderFile(filepath, data))};`);
    }
    catch (error) {
      return Promise.reject(`${error}`);
    }
  }

  compileStatic(file) {
    return Promise.resolve(engine.render(file.data));
  }
}

Views.prototype.brunchPlugin = true;
Views.prototype.type = 'template';
Views.prototype.staticExtension = 'pug';
Views.prototype.staticTargetExtension = 'html';

module.exports = Views;
