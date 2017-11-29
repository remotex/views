'use strict';

const path = require('path');
const jade = require('jade');

const defaults = {
  templates: 'views',
  definitions: /^app\/(templates|components)[\\/].*\.json$/,
  ext: 'jade'
};

class Views {
  constructor(config) {
    this.config = Object.assign({}, defaults, config.plugins.views);
    this.pattern = this.config.definitions;
  }

  compile(file) {
    let definitions, name, template;

    try {
      definitions = JSON.parse(file.data);
      name = definitions.template || path.parse(file.path).name;
      template = path.join(`${this.config.templates}`, `${name}.${this.config.ext}`);
    }
    catch (error) {
      return Promise.reject(`${error}`);
    }

    return Promise.resolve('module.exports = ' + JSON.stringify(jade.renderFile(template, definitions)) + ';');
  }
}

Views.prototype.brunchPlugin = true;
Views.prototype.type = 'template';

module.exports = Views;
