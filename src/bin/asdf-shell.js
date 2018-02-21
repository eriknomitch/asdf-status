import program from 'commander';

program
  .version('0.1.0')
  .option('-u, --update-plugins', 'Update plugins')
  .parse(process.argv);

