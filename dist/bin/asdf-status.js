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
var VERSION = _lodash.default.trimEnd(_fs.default.readFileSync('VERSION', 'utf8'), '\n'); // -----------------------------------------------
// PROGRAM ---------------------------------------
// -----------------------------------------------


_commander.default.version(VERSION).option('-U, --update-plugins', 'Update plugins').parse(process.argv); // ===============================================
// MAIN ==========================================
// ===============================================


if (_commander.default.updatePlugins) {
  console.log('update');
}