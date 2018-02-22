#!/usr/bin/env node
"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _shelljs = _interopRequireDefault(require("shelljs"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ===============================================
// ASDF-STATUS ===================================
// ===============================================
// -----------------------------------------------
// PROGRAM ---------------------------------------
// -----------------------------------------------
_commander.default.version('0.1.0').option('-U, --update-plugins', 'Update plugins').parse(process.argv); // ===============================================
// MAIN ==========================================
// ===============================================


if (_commander.default.updatePlugins) {
  console.log('update');
}

var asdfPackages = _lodash.default.chain(_shelljs.default.exec('asdf plugin-list', {
  silent: true
})).trimEnd('\n').split('\n').value();

_lodash.default.each(asdfPackages, function (asdfPackage) {
  console.log("pkg: ".concat(asdfPackage));
});