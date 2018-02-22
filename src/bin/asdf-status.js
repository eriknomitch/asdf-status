#!/usr/bin/env node
// ===============================================
// ASDF-STATUS ===================================
// ===============================================
import program from 'commander';
import shell from 'shelljs';
import fs from 'fs';
import chalk from 'chalk';
import R from 'ramda';
import _ from 'lodash';

// -----------------------------------------------
// ALIASES ---------------------------------------
// -----------------------------------------------
const { log } = console;

// -----------------------------------------------
// CONSTANTS -------------------------------------
// -----------------------------------------------
const VERSION = fs.readFileSync('VERSION', 'utf8').trim();

// -----------------------------------------------
// UTILITY ---------------------------------------
// -----------------------------------------------
const exec = command => shell.exec(command, { silent: true }).stdout.trim();

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

exec('asdf plugin-list').split('\n').forEach((plugin) => {
  log(chalk.white.bold(plugin));

  plugins[plugin] = {
    version: {
      installed: exec(`asdf list ${plugin}`),
      latest: exec(`asdf list-all ${plugin} | tail -n 1`),
    },
  };
});

console.log(plugins);
