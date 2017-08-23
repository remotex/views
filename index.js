'use strict';

const path = require('path');
const jade = require('jade');

class Views {
  constructor(config) {
    this.config = config.plugins.views || {};

    console.log(config);
  }

  onCompile() {
    jade.render('p Hello World!', {});
  }
}

Views.prototype.brunchPlugin = true;
Views.prototype.type = 'template';
Views.prototype.pattern = /\.jage$/; 'jade';
Views.prototype.targetExtension = 'html';

module.exports = Views;
