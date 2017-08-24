'use strict';

const path = require('path');
const fs = require('fs');
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
    let name, data, template;

    try {
      name = path.parse(file.path).name;
      data = JSON.parse(file.data);
      template = fs.readFileSync(path.join(`${this.config.path}`, `${name}.${this.config.ext}`), 'utf-8');
    }
    catch (error) {
      return Promise.reject(`${error}`);
    }

    return Promise.resolve('module.exports = ' + JSON.stringify(jade.render(template, data.definitions)) + ';');
  }
}

Views.prototype.brunchPlugin = true;
Views.prototype.type = 'template';
Views.prototype.pattern = /\.json$/;

module.exports = Views;
