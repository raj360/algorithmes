const a = [3, 4, 5];
const k = 2;
const queries = [1, 2];


// const shift = (arr) => arr.

function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++){
      a.unshift(a.pop());
  }
return queries.map(num => a[num])
}

const result = circularArrayRotation(a, k, queries);
result
