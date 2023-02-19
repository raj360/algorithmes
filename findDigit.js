const findDigits = (n) => {
  return n
    .toString()
    .split('')
    .reduce((accum, curr) => {
      if (n % curr === 0) {
        return ++accum;
      }
      return accum;
    }, 0);
};

const findDigits = (n) => {
  let counter = 0;
  const num = n.toString();

  for (let i = 0; i < num.length; i++) {
    if (n % num[i] === 0) {
      counter++;
    }
  }

  return counter;
};

const result = findDigits(2);

result;
