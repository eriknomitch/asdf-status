#!/usr/bin/env node
"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _shelljs = _interopRequireDefault(require("shelljs"));

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _ramda = _interopRequireDefault(require("ramda"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ===============================================
// ASDF-STATUS ===================================
// ===============================================
// -----------------------------------------------
// ALIASES ---------------------------------------
// -----------------------------------------------
var _console = console,
    log = _console.log; // -----------------------------------------------
// CONSTANTS -------------------------------------
// -----------------------------------------------

var VERSION = _fs.default.readFileSync('VERSION', 'utf8').trim(); // -----------------------------------------------
// UTILITY ---------------------------------------
// -----------------------------------------------


var exec = function exec(command) {
  return _shelljs.default.exec(command, {
    silent: true
  }).stdout.trim();
}; // -----------------------------------------------
// PROGRAM ---------------------------------------
// -----------------------------------------------


_commander.default.version(VERSION).option('-U, --update-plugins', 'Update plugins').parse(process.argv); // ===============================================
// MAIN ==========================================
// ===============================================


if (_commander.default.updatePlugins) {
  log('update');
} // -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------


var plugins = {};
exec('asdf plugin-list').split('\n').forEach(function (plugin) {
  log(_chalk.default.white.bold(plugin));
  plugins[plugin] = {
    version: {
      installed: exec("asdf list ".concat(plugin)),
      latest: exec("asdf list-all ".concat(plugin, " | tail -n 1"))
    }
  };
});
console.log(plugins);