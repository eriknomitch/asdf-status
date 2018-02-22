#!/usr/bin/env node
"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _shelljs = _interopRequireDefault(require("shelljs"));

var _fs = _interopRequireDefault(require("fs"));

var _ramda = _interopRequireDefault(require("ramda"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ===============================================
// ASDF-STATUS ===================================
// ===============================================
// -----------------------------------------------
// CONSTANTS -------------------------------------
// -----------------------------------------------
var VERSION = _fs.default.readFileSync('VERSION', 'utf8').trim(); // -----------------------------------------------
// UTILITY ---------------------------------------
// -----------------------------------------------
// -----------------------------------------------
// PROGRAM ---------------------------------------
// -----------------------------------------------


_commander.default.version(VERSION).option('-U, --update-plugins', 'Update plugins').parse(process.argv); // ===============================================
// MAIN ==========================================
// ===============================================


if (_commander.default.updatePlugins) {
  console.log('update');
} // -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------


var plugins = {};

_shelljs.default.exec('asdf plugin-list').trim().split('\n').forEach(function (plugin) {
  plugins[plugin] = {
    version: {
      installed: _shelljs.default.exec("asdf list ".concat(plugin)).stdout.trim(),
      latest: _shelljs.default.exec("asdf list-all ".concat(plugin, " | tail -n 1")).stdout.trim()
    }
  };
});

console.log(plugins);