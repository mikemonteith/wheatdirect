/**
 * Given an array of integers `weightingValues`, return a random index,
 * with the probably weighted by the weightingValues.
 */
const getWeightedRandomIndex = weightingValues => {
  const total = weightingValues.reduce((prev, item) => prev + item, 0);

  const random = Math.random() * total;

  let sum = 0;
  for (let i = 0; i < weightingValues.length; i++) {
    sum += weightingValues[i];
    if (random < sum) {
      return i;
    }
  }
};

export default config => {
  const { values } = config;

  const weightingValues = values.map(item => parseInt(item.chance));

  const index = getWeightedRandomIndex(weightingValues);
  const value = values[index];

  return value.url;
};
