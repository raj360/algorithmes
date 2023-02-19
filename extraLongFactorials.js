const extraLongFactorials = (n) =>
  BigInt([...Array(n).keys()].map((_, key) => key + 1).reduce((accum, curr) => accum * curr, 1));

const result = extraLongFactorials(25);

result;