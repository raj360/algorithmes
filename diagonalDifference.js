function diagonalDifference(arr) {
  let primary = 0,
    secondary = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        primary += arr[i][j];
      }
      if (i + j == arr.length - 1) {
        secondary += arr[i][j];
      }
    }
  }
  return Math.abs(primary - secondary);
}

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const result = diagonalDifference(arr);
result;