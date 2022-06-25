function miniMaxSum(arr) {
  let sums = [];
  //Check all items are identical
  if (new Set(arr).size === 1) {
    let newArray = arr.splice(0, arr.length - 1);
    newArray.forEach((num) => sums.push(newArray.reduce((a, b) => a + b)));
  } else {
    arr.forEach((num) => {
      sums.push(arr.filter((n) => n !== num).reduce((accum, cur) => accum + cur));
    });
  }

  console.log(`${Math.min(...sums)} ${Math.max(...sums)}`);
}

let arr = [1, 2, 3, 4, 5];
let arr2 = [5, 5, 5, 5, 5];
miniMaxSum(arr);
