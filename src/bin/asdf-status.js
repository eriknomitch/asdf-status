#!/usr/bin/env node
import program from 'commander';

program
  .version('0.1.0')
  .option('-U, --update-plugins', 'Update plugins')
  .parse(process.argv);

if (program.updatePlugins) {
  console.log('update');
}
