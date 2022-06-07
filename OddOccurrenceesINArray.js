function solution(A) {
  let accum = {};
  let i = 0;

  while (i < A.length) {
    A[i] in accum ? (accum[A[i]] += 1) : (accum[A[i]] = 1);
    i++;
  }

  return parseInt(Object.keys(accum).find((key) => accum[key] === Object.values(accum).find((n) => n % 2 !== 0)));
}

let result = solution([9, 3, 9, 3, 9, 7, 9, 9, 7]);
