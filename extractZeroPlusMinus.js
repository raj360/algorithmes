/**
 * Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

 */

let arr = [-4, 3, -9, 0, 4, 1];
let arr1 = [1, -2, -7, 9, 1, -8, -5];

function plusMinus(arr) {
  const length = arr.length;
  const accums = arr
    .map((num) => (num > 0 ? 'pos' : num < 0 ? 'neg' : 'zer'))
    .reduce((accum, curr) => {
      return { ...accum, [curr]: (accum[curr] || 0) + 1 };
    }, {});

  console.log(((accums['pos'] || 0) / length).toFixed(6));
  console.log(((accums['neg'] || 0) / length).toFixed(6));
  console.log(((accums['zer'] || 0) / length).toFixed(6));
}

plusMinus(arr1);
