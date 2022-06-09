let Sudoku = function (data) {
  //   Public methods
  return {
    isValid: function () {
      const chain = [
        (data) => {
          //loop through all rows
          for (let i = 0; i < data.length; i++) {
            return validateDimensions(data[i]);
          }
          return true;
        },
          (data) => {
            //loop through all columns
            for (let i = 0; i < data.length; i++) {
              let start = 0;
              let column = [];
              for (let j = 0; j < data.length; j++) {
                column[start++] = data[j][i];
              }
              return validateDimensions(column);
            }
            return true;
          };,
          (data) => {
            //looping through all the NXN Matrix
            for (let i = 0; i < data.length; i++) {
              for (let j = 0; j < data.length; j++) {
                let start = 0;
                let cubeNxN = [];
                for (let row = i * data.length; row < i * data.length + data.length; row++) {
                  for (let column = j * data.length; column < j * data.length + data.length; column++) {
                    cubeNxN[start++] = data[row][column];
                  }
                }
                //if we get here, the the matric is all good.
                return true;
              }
            }
            return true;
          };,
      ];

      //check is the cube dimensions are square all equal
      let validateDimensions = (cubeNxN) =>
        new Set(cubeNxN).size === cubeNxN.length && Number.isInteger(Math.sqrt(cubeNxN.length));

      return chain.every((func) => func(data));
    },
  };
};

let badSudoku1 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

let badSudoku2 = [[1, 2, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3, 4], [1]];

let badSudoku3 = [[1, 2, 3, 4, 1], [1, 2, 3, 4], [1, 2, 3, 4], [1]];

let goodSudoku1 = [
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],

  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],

  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4],
];

let goodSudoku2 = [
  [1, 4, 2, 3],
  [3, 2, 4, 1],

  [4, 1, 3, 2],
  [2, 3, 1, 4],
];

const result = Sudoku(goodSudoku1).isValid();
result;
