function closestNumbers(arr) {
  //   Write your code here
  arr.sort(function (a, b) {
    return a - b;
  });

  let max = arr[1] - arr[0];
  let maxPairs = [arr[0], arr[1]];

  for (var i = 2; i < arr.length; i++) {
    let prev = arr[i - 1];
    let next = arr[i];
    let diff = next - prev;

    if (diff < max) {
      max = diff;
      maxPairs = [prev, next];
    } else if (diff === max) {
      maxPairs = [...maxPairs, prev, next];
    }
  }

  return maxPairs;
}

let arr = [5, -9, -5, 9, 10, 12, 13, 14];
arr;
const result = closestNumbers(arr);
result;
