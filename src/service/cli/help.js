'use strict';

const version = require(`./version`);
const generate = require(`./generate`);

module.exports = {
  name: `--help`,
  run() {
    console.info(`Программа запускает http-сервер и формирует файл с данными для API.`);
    console.info(``);
    console.info(`    Гайд:`);
    console.info(`    service.js <command>`);
    console.info(``);
    console.info(`    Команды:`);
    console.info(`    ${version.name}: выводит номер версии`);
    console.info(`    ${this.name}: печатает этот текст`);
    console.info(`    ${generate.name} <count> формирует файл mock.json`);
  }
};
