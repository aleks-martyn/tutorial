const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
});

// console.log(total); // 32

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => [...allTags, ...tweet.tags], []);

const tags = getTags(tweets);
// console.log(tags); // ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

/* const getTagStats = (acc, tag) => {
  if (!Object.hasOwn(acc, tag)) {
    return {
      ...acc,
      [tag]: 1,
    };
  }

  return {
    ...acc,
    [tag]: acc[tag] + 1,
  };
};
цю функцію можна оптимізувати з допомогою тернарного оператора*/

const getTagStats = (acc, tag) => ({
  ...acc,
  [tag]: Object.hasOwn(acc, tag) ? acc[tag] + 1 : 1,
});

const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
// console.log(tagCount); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
