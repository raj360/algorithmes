function solution(R) {
  let temp = [];

  return R.split('')
    .map((value, index) => {
      if (value === 'S') {
        temp.push(value);
      }

      if (value === 'S' && temp.length <= 1) {
        return 40;
      } else if (value === 'S') {
        return 30;
      } else {
        return 5;
      }
    })
    .reduce((a, b) => a + b);
}

const result = solution('SSA');
console.log({ result });
