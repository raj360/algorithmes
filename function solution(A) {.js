function solution(A) {
  let sorted = A.sort();
  for (let i = 1; i <= sorted.length + 1; i++) {
    if (!sorted.includes(i)) {
      return i;
      break;
    }
  }
}

let result = solution([1, 3, 6, 4, 1, 2]);
result;
