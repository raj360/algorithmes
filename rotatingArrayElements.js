//Shifting array elements by a given number
function solution(A, K) {
  let i = 0;

  while (i < K) {
    A.unshift(A.pop());
    i++;
  }

  return A;
}

let result = solution([3, 8, 9, 7, 6], 3);
