function solution(A) {
  for (let i = 1; i <= A.length + 1; i++) {
    if (!A.includes(i)) {
      return i;
      break;
    }
  }
}

let result = solution([1, 3, 6, 4, 1, 2]);
