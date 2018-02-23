#!/usr/bin/env node
// ===============================================
// ASDF-STATUS ===================================
// ===============================================
import program from 'commander';
import shell from 'shelljs';
import fs from 'fs';
import chalk from 'chalk';
/* eslint-disable */
import R from 'ramda';
import _ from 'lodash';
/* eslint-enable */

// -----------------------------------------------
// ALIASES ---------------------------------------
// -----------------------------------------------
const { log } = console;

// -----------------------------------------------
// UTILITY->SHELL --------------------------------
// -----------------------------------------------
const X = command => shell.exec(command, { silent: true }).stdout.trim();

// -----------------------------------------------
// CONSTANTS -------------------------------------
// -----------------------------------------------
const VERSION = fs.readFileSync('VERSION', 'utf8').trim();

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
  log('update');
}

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
const plugins = {};

X('asdf plugin-list').split('\n').forEach((plugin) => {
  log(chalk.white.bold(plugin));

  plugins[plugin] = {
    version: {
      installed: X(`asdf list ${plugin}`),
      latest: X(`asdf list-all ${plugin} | tail -n 1`),
    },
  };
});

console.log(plugins);
