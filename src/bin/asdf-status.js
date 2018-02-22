#!/usr/bin/env node
// ===============================================
// ASDF-STATUS ===================================
// ===============================================
import program from 'commander';
import shell from 'shelljs';
import _ from 'lodash';

// -----------------------------------------------
// PROGRAM ---------------------------------------
// -----------------------------------------------
program
  .version('0.1.0')
  .option('-U, --update-plugins', 'Update plugins')
  .parse(process.argv);

// ===============================================
// MAIN ==========================================
// ===============================================
if (program.updatePlugins) {
  console.log('update');
}

const asdfPlugins =
  _.chain(shell.exec('asdf plugin-list', { silent: true }))
    .trimEnd('\n')
    .split('\n')
    .value();

_.each(asdfPlugins, (asdfPlugin) => {
  console.log(`pkg: ${asdfPlugin}`);
});
