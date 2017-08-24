'use strict';

const path = require('path');
const jade = require('jade');
const debug = require('debug')('brunch:views-brunch');

debug('here');
console.log('here');

class Views {
  constructor(config) {
    this.config = config.plugins.views || {};

    debug('constructor: ', this.config);
    console.log('constructor: ', this.config);
  }

  compile(file) {
    debug('compile: ', file);
    console.log('compile: ', file);
  }
}

Views.prototype.brunchPlugin = true;
Views.prototype.type = 'template';
Views.prototype.pattern = /\.jage$/;
Views.prototype.targetExtension = 'html';

module.exports = Views;
