'use strict';

const moment = require(`moment`);

const minCountOfSentences = 1;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const getRandomDateOfLastMonths = (monthsQuantity) => {
  const startDate = moment().subtract(monthsQuantity - 1, `months`).startOf(`month`);
  const randomDateMs = getRandomInt(startDate, moment());
  const result = moment(randomDateMs).format(`YY-MM-DD HH:mm:ss`);
  return result;
};

const createRandomText = (sentences, maxCount) => shuffle(sentences).slice(0, getRandomInt(minCountOfSentences, maxCount)).join(` `);

const getRandomElementOfArray = (array) => array[getRandomInt(minCountOfSentences, array.length)];

module.exports = {
  getRandomInt,
  shuffle,
  createRandomText,
  getRandomElementOfArray,
  getRandomDateOfLastMonths
};
