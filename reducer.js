//count array items
const array = ['one', 'two', 'three', 'one', 'two', 'one'];
const apples = ['green', 'red', 'red', 'yellow', 'red', 'yellow', 'green', 'green'];

const test = array.reduce((prev, apple) => {
  prev[apple] >= 1 ? prev[apple]++ : (prev[apple] = 1);
  return prev;
}, {});

console.log({ test });

console.log({ index: test['two'] });

const objectArray = [
  { name: 'Raymond', salary: 2000 },
  { name: 'Peter', salary: 4000 },
  { name: 'John', salary: 1500 },
  { name: 'Raymond', salary: 3000 },
  { name: 'Raymond', salary: 2000 },
  { name: 'Peter', salary: 2500 },
  { name: 'Raymond', salary: 8000 },
  { name: 'Tom', salary: 2800 },
  { name: 'Peter', salary: 6000 },
  { name: 'Raymond', salary: 5000 },
];

let output = objectArray.reduce((grouped, dev) => {
  (grouped[dev['name']] = grouped[dev['name']] || []).push(dev.salary);
  return grouped;
}, {});

console.log({ output });
let result = array.reduce((accum, curr) => {
  // console.log({accum})
  return { ...accum, [curr]: accum[curr] + 1 || 1 };
}, {});

result;
