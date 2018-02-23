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
  log('Updating all plugins...');
  X('asdf plugin-update --all');
}

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
X('asdf plugin-list').split('\n').forEach((pluginName) => {

  log(`${chalk.green.bold('>')} ${chalk.white.bold(pluginName)}`);

  const plugin = {
    name: pluginName,
    version: {
      installed: X(`asdf list ${pluginName}`),
      latest: X(`asdf list-all ${pluginName} | tail -n 1`),
    },
  };

  plugin.current = plugin.version.installed === plugin.version.latest;

  const latestColor = plugin.current ? 'green' : 'yellow';

  log(`  installed: ${chalk[latestColor].bold(plugin.version.installed)}`);
  log(`     latest: ${chalk.white(plugin.version.latest)}`);
  log();
});

