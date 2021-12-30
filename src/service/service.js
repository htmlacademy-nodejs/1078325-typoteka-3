'use strict';

const { Cli } = require('./cli');
const { DEFAULT_COMMAND } = require('../constants');

const userArguments = process.argv.slice(2);
const [ userCommand ] = userArguments;

if (userArguments.length === 0 || !Cli[userCommand]) {
  Cli[DEFAULT_COMMAND].run();
  process.exit(0);
}

Cli[userCommand].run(userArguments.slice(1));