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
_commander.default.version('0.1.0').option('-U, --update-plugins', 'Update plugins').parse(process.argv);

if (_commander.default.updatePlugins) {
  console.log('update');
} // ===============================================
// MAIN ==========================================
// ===============================================


_shelljs.default.exec('asdf plugin-list', {
  silent: true
}, function (code, stdout) {
  _lodash.default.split(_lodash.default.trimEnd(stdout, '\n'), '\n').forEach(function (pkg) {
    return console.log("ok: ".concat(pkg));
  });
});