function flippingMatrix(matrix) {
  let len = matrix.length / 2;
  let max = 0;
  let sum = 0;

  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {
      max = Number.MIN_VALUE;
      max = Math.max(matrix[row][col], max);
      max = Math.max(matrix[row][2 * len - col - 1], max);
      max = Math.max(matrix[2 * len - row - 1][col], max);
      max = Math.max(matrix[2 * len - row - 1][2 * len - col - 1], max);
      sum += max;
    }
  }

  return sum;
}

const matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

const result = flippingMatrix(matrix);
result;
