#!/usr/bin/env node
// ===============================================
// ASDF-STATUS ===================================
// ===============================================
import program from 'commander';

// -----------------------------------------------
// PROGRAM ---------------------------------------
// -----------------------------------------------
program
  .version('0.1.0')
  .option('-U, --update-plugins', 'Update plugins')
  .parse(process.argv);

if (program.updatePlugins) {
  console.log('update');
}
