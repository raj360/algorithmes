/*
checking if a sudoku is solvable
 */
const sudoku2 = (grid) => {
  //chain of responsibility pattern
  const chain = [
    (grid) => {
      //loop through all rows
      for (let i = 0; i < grid.length; i++) {
        if (isDuplicate(grid[i])) {
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
        if (isDuplicate(column)) {
          return false;
        }
      }
      return true;
    },
    (grid) => {
      //looping through all the 3x3 cubes
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let start = 0;
          let cube3x3 = [];
          for (let row = i * 3; row < i * 3 + 3; row++) {
            for (let column = j * 3; column < j * 3 + 3; column++) {
              cube3x3[start++] = grid[row][column];
            }
          }
          if (isDuplicate(cube3x3)) {
            return false;
          }
        }
      }
      return true;
    },
  ];
  //checking for duplicate values is general is not required in the chain
  let isDuplicate = (column) => {
    column = column.filter((value) => value !== '.');
    console.log(column);
    return new Set(column).size !== column.length;
  };
  return chain.every((func) => func(grid));
};
