#!/usr/bin/env node
// ===============================================
// ASDF-STATUS ===================================
// ===============================================
import program from 'commander';
import shell from 'shelljs';

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

// ===============================================
// MAIN ==========================================
// ===============================================
shell.exec('asdf plugin-list', {
  silent: true,
}, (code, stdout, stderr) => {
  stdout.split('\n').forEach(pkg => console.log(`ok: ${pkg}`));
});