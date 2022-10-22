// remove item that ain't on her menue
// add the other bill and divide by two
// if bill is greater than what she was charged print the over flow
// else print Bon Appetit
const bonAppetit = (bill, k, b) => {
  bill.splice(k, 1);

  const costToCharge = bill.reduce((a, b) => a + b) / 2;

  return costToCharge === b ? 'Bon Appetit' : b - costToCharge;
};

var results = bonAppetit([3, 10, 2, 9], 1, 7);

results;

// nm -> mn
// reverse number
// result  = (abs(nm - mn)) % k
// if result === 0 its a beautify day

const getReverse = (value) => parseInt(value.toString().split('').reverse().join(''), 10);

const beautifulDays = (i, j, k) => {
  let count = 0;
  const range = [...Array(j + 1).keys()].slice(i).filter((days) => Math.abs(days - getReverse(days)) % k === 0).length;

  for (let days = i; days <= j; days++) {
    if (Math.abs(days - getReverse(days)) % k === 0) {
      count++;
    }
  }

  return count;
};

const beautifulDays2 = (i, j, k) =>
  [...Array(j + 1).keys()].slice(i).filter((days) => Math.abs(days - getReverse(days)) % k === 0).length;

var result = beautifulDays(20, 23, 6);
var result = beautifulDays2(20, 23, 6);

const hurdleRace = (k, height) => {
  const max = Math.max(...height);
  if (k > max) return 0;
  else max - k;
};

var result = hurdleRace(7, [2, 5, 4, 5, 2]);
result;

// create ranges [s, t]
// apples = a
// orange = b
// gets expected distances for apples and orranges
// compare distances and ranges
//
const countFruitsInRange = (fruits, treeDistance, ranges) =>
  fruits.map((value) => value + treeDistance).filter((distance) => ranges.includes(distance)).length;

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const ranges = [...Array(t + 1).keys()].slice(s);

  [countFruitsInRange(apples, a, ranges), countFruitsInRange(oranges, b, ranges)].forEach((value) => {
    console.log(value);
  });
};

countApplesAndOranges2 = (s, t, a, b, apples, oranges) =>
  Object.values(
    [...Array(t + 1).keys()].slice(s).reduce(
      (accum, curr) => {
        return {
          ...accum,
          a: apples.includes(curr - a) ? accum['a'] + 1 : accum['a'],
          o: oranges.includes(curr - b) ? accum['o'] + 1 : accum['o'],
        };
      },
      { a: 0, o: 0 }
    )
  ).forEach((value) => {
    console.log(value);
  });

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);

countApplesAndOranges2(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
