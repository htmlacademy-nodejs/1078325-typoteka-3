'use strict';

const fs = require(`fs`);
const {FILE_NAME, TITLES, CATEGORIES, ANNOUNCES, DEFAULT_COUNT, minDay, maxDay, ExitCode} = require(`../../constants`);
const {getRandomDate, createRandomText, getRandomElementOfArray} = require(`../../utils`);

const generatePublications = (count) => {
  return new Array(count).fill({}).map(() => ({
    title: getRandomElementOfArray(TITLES),
    createdDate: getRandomDate(minDay, maxDay),
    announce: createRandomText(ANNOUNCES, 5),
    fullText: createRandomText(ANNOUNCES, ANNOUNCES.length - 1),
    category: getRandomElementOfArray(CATEGORIES)
  }));
};


module.exports = {
  name: `--generate`,
  run(args) {
    const [count] = args;
    const countPublications = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generatePublications(countPublications));
    fs.writeFile(FILE_NAME, content, (err) => {
      if (err) {
        console.error(`Can't write data to file...`);
        process.exit(ExitCode.failure);
      }
      console.info(`Operation success. File created.`);
    });
  }
};
