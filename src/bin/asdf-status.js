#!/usr/bin/env node
// ===============================================
// ASDF-STATUS ===================================
// ===============================================
import program from 'commander';
import shell from 'shelljs';
import fs from 'fs';
import R from 'ramda';
import _ from 'lodash';

// -----------------------------------------------
// CONSTANTS -------------------------------------
// -----------------------------------------------
const VERSION = fs.readFileSync('VERSION', 'utf8').trim();

// -----------------------------------------------
// UTILITY ---------------------------------------
// -----------------------------------------------

// -----------------------------------------------
// PROGRAM ---------------------------------------
// -----------------------------------------------
program
  .version(VERSION)
  .option('-U, --update-plugins', 'Update plugins')
  .parse(process.argv);

// ===============================================
// MAIN ==========================================
// ===============================================
if (program.updatePlugins) {
  console.log('update');
}

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
const plugins = {};

_.trimEnd(shell.exec('asdf plugin-list'), '\n').split('\n').forEach((plugin) => {
  plugins[plugin] = {
    version: {
      installed: shell.exec(`asdf list ${plugin}`).stdout.trim(),
    },
  };
});

console.log(plugins);
