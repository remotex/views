'use strict';

const path = require('path');
const jade = require('jade');

const defaults = {
  path: 'views',
  ext: 'jade'
};

class Views {
  constructor(config) {
    this.config = Object.assign({}, defaults, config.plugins.views);
  }

  compile(file) {
    let data, name, template;

    try {
      data = JSON.parse(file.data);
      name = data.template || path.parse(file.path).name;
      template = path.join(`${this.config.path}`, `${name}.${this.config.ext}`);
    }
    catch (error) {
      return Promise.reject(`${error}`);
    }

    return Promise.resolve('module.exports = ' + JSON.stringify(jade.renderFile(template, data.definitions)) + ';');
  }
}

Views.prototype.brunchPlugin = true;
Views.prototype.type = 'template';
Views.prototype.pattern = /\.json$/;

module.exports = Views;
