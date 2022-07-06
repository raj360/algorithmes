//1 day ticket cost 2
//7 day ticket cost 7 day
//30 day ticket costs 25 for 30 consecurtive days

function solution(A) {
  const start = A[0],
    end = A[A.length - 1],
    days = [];

  let cost = [2, 7, 25],
    accum = { 1: 0, 7: 0, 30: 0 },
    counterOne = 0,
    counterTwo = 0,
    counterThree = 0;

  for (let i = start; i < end + 1; i++) {
    if (A.includes(i) && counterOne < 1) {
      accum[1] += 1;
      counterOne += 1;
      counterOne == console.log(i);
    }

    if (A.includes(i) && counterTwo < 7) {
      accum[7] += 1;
      counterTwo += 1;
    }

    if (A.includes(i) && counterThree < 30) {
      accum[1] += 1;
      counterThree += 1;
    }
  }
  accum;
  return Object.values(accum)
    .map((item, index) => item * cost[index])
    .reduce((a, b) => a + b);
}

const A = [1, 2, 3, 4, 5, 7, 29, 30];

const result = solution(A);
console.log(result);
