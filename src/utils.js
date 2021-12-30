'use strict';

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

const getRandomDate = (minDay, maxDay) => {
  return new Date(new Date() - new Date(getRandomInt(minDay, maxDay) * 1000 * 60 * 60 * 24));
};

const createRandomText = (sentences, maxCount) => shuffle(sentences).slice(0, getRandomInt(minCountOfSentences, maxCount)).join(` `);

const getRandomElementOfArray = (array) => array[getRandomInt(minCountOfSentences, array.length)];

module.exports = {
  getRandomInt,
  shuffle,
  getRandomDate,
  createRandomText,
  getRandomElementOfArray
};
