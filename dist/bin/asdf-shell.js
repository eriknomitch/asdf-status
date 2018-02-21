#!/usr/bin/env node
"use strict";

var _commander = _interopRequireDefault(require("commander"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander.default.version('0.1.0').option('-U, --update-plugins', 'Update plugins').parse(process.argv);

if (_commander.default.updatePlugins) {
  console.log('update');
}