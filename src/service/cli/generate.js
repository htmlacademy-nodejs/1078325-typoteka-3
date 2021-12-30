
const fs = require(`fs`)
const { FILE_NAME, TITLES, CATEGORIES, ANNOUNCES, DEFAULT_COUNT, minDay, maxDay } = require(`../../constants`);
const { getRandomInt, getRandomDate, shuffle } = require(`../../utils`);

const generatePublications = (count) => {
  console.log(count);
  return new Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    createdDate: getRandomDate(minDay, maxDay),
    announce: shuffle(ANNOUNCES).slice(0, getRandomInt(0, 5)).join(` `), 
    fullText: shuffle(ANNOUNCES).slice(0, getRandomInt(0, ANNOUNCES.length - 1)).join(` `),
    category: CATEGORIES[getRandomInt(0, CATEGORIES.length - 1)]
  }));
};



module.exports = {
  name: '--generate',
  run(args) {
    const [count] = args;
    const countPublications = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generatePublications(countPublications));
    fs.writeFile(FILE_NAME, content, (err) => {
      if (err) {
        return console.error(`Can't write data to file...`);
      }
      console.info(`Operation success. File created.`);
    });
  }
}