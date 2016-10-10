#!/usr/bin/env node

'use strict'; // eslint-disable-line strict

require('babel-register');

const CommandLineInterface = require('cmnd').CommandLineInterface;
const CLI = new CommandLineInterface();

CLI.load(__dirname, './commands');
CLI.run(process.argv.slice(2));
