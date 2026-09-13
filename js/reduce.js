const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
});

console.log(total);

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
console.log(tags);

const getTagStats = (acc, tag) => {
  if (!Object.hasOwn(acc, tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);
