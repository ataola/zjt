#!/usr/bin/env node
/*
 * @Author: ataola 
 * @Date: 2020-08-27 21:57:16 
 * @Last Modified by: ataola
 * @Last Modified time: 2020-08-27 22:53:03
 */

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const { Command } = require('commander');

const packageJson = require('./package.json');

clear();

// init a logo
console.log(chalk.yellow(figlet.textSync('zjt', {
  horizontalLayout: 'full'
})));

const program = new Command();

// version
program
  .version(packageJson.version)
  .usage('<command [options]>');


// optional parameters
program.option('-f, --force', 'overwrite target directory if it exists')


// create
program
  .command('create <app-name>')
  .description('create a new project')
  .action(appname => {
    console.log(chalk.green('begin to create app: ', appname));
  });

program.on('--help', () => {
  console.log();
  console.log('create by ataola, zjt-cli is a automation tool');
  console.log('about more, please visit https://zhengjiangtao.cn');
  console.log();
});

program.commands.forEach(command => command.on('--help', () => console.log()));

// parse arguments
program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
