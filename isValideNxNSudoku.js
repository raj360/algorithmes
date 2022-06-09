/*
checking if a sudoku is solvable
 */
const sudoku2 = (grid) => {
  //chain of responsibility pattern
  const chain = [
    (grid) => {
      //loop through all rows
      for (let i = 0; i < grid.length; i++) {
        if (isValid(grid[i])) {
          return false;
        }
      }
      return true;
    },
    (grid) => {
      //loop through all columns
      for (let i = 0; i < grid.length; i++) {
        let start = 0;
        let column = [];
        for (let j = 0; j < grid.length; j++) {
          column[start++] = grid[j][i];
        }
        if (isValid(column)) {
          return false;
        }
      }
      return true;
    },
    (grid) => {
      //looping through all the 3x3 cubes
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
          let start = 0;
          let cubeNxN = [];
          for (let row = i * grid.length; row < i * grid.length + grid.length; row++) {
            for (let column = j * grid.length; column < j * grid.length + grid.length; column++) {
              cubeNxN[start++] = grid[row][column];
            }
          }

          if (isValid(cubeNxN)) {
            return true;
          }
        }
      }
      return true;
    },
  ];
  //checking for duplicate values is general is not required in the chain
  let isValid = (cubeNxN) => {
    console.log({ size: cubeNxN.length, cube: cubeNxN });
    let test1 = Number.isInteger(Math.sqrt(cubeNxN.length));
    let test2 = console.log(test1);
    console.log(!test2);
    return test2;
  };

  let result = chain.every((func) => func(grid));
  result;
  return result;
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

const result = sudoku2(badSudoku2);
result;
