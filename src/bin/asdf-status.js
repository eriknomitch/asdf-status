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

shell.exec('asdf plugin-list').trim().split('\n').forEach((plugin) => {
  plugins[plugin] = {
    version: {
      installed: shell.exec(`asdf list ${plugin}`).stdout.trim(),
      latest: shell.exec(`asdf list-all ${plugin} | tail -n 1`).stdout.trim(),
    },
  };
});

console.log(plugins);
