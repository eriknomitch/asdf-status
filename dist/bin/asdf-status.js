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

/* eslint-disable */

/* eslint-enable */
// -----------------------------------------------
// ALIASES ---------------------------------------
// -----------------------------------------------
var _console = console,
    log = _console.log; // -----------------------------------------------
// UTILITY->SHELL --------------------------------
// -----------------------------------------------

var X = function X(command) {
  return _shelljs.default.exec(command, {
    silent: true
  }).stdout.trim();
}; // -----------------------------------------------
// CONSTANTS -------------------------------------
// -----------------------------------------------
//const VERSION = fs.readFileSync('VERSION', 'utf8').trim();


var VERSION = '0.1.0'; // -----------------------------------------------
// PROGRAM ---------------------------------------
// -----------------------------------------------

_commander.default.version(VERSION).option('-U, --update-plugins', 'Update plugins').parse(process.argv); // ===============================================
// MAIN ==========================================
// ===============================================


if (_commander.default.updatePlugins) {
  log('Updating all plugins...');
  X('asdf plugin-update --all');
} // -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------


X('asdf plugin-list').split('\n').forEach(function (pluginName) {
  log("".concat(_chalk.default.green.bold('>'), " ").concat(_chalk.default.white.bold(pluginName)));
  var plugin = {
    name: pluginName,
    version: {
      installed: X("asdf list ".concat(pluginName)),
      latest: X("asdf list-all ".concat(pluginName, " | tail -n 1"))
    }
  };
  plugin.current = plugin.version.installed === plugin.version.latest;
  var latestColor = plugin.current ? 'green' : 'yellow';
  log("  installed: ".concat(_chalk.default[latestColor].bold(plugin.version.installed)));
  log("     latest: ".concat(_chalk.default.white(plugin.version.latest)));
  log();
});