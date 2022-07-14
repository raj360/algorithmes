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


//Came up with a more efficient solution for minMaxSum

function miniMaxSum(arr) {
  const sums = [];

  const getArraySum = (arr) => arr.reduce((a, b) => a + b);

  arr.forEach((num, index) => {
    arr[index] = 0;
    sums.push(getArraySum(arr));
    arr[index] = num;
  });

  console.log(`${Math.min(...sums)} ${Math.max(...sums)}`);
}

const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);
