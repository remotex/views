'use strict';

const path = require('path');
const jsonfile = require('jsonfile');
const engine = require('pug');

const defaults = {
  path: 'pug',
  pattern: /\.pug\.json$/,
  replace: /^.*(app)/,
  staticLocals: {}
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
    let locals;

    locals = this.config.staticLocals[path.basename(file.path)];
    locals = locals ? jsonfile.readFileSync(locals) : {};

    return Promise.resolve(engine.render(file.data, locals));
  }
}

Views.prototype.brunchPlugin = true;
Views.prototype.type = 'template';
Views.prototype.staticExtension = 'pug';
Views.prototype.staticTargetExtension = 'html';

module.exports = Views;
