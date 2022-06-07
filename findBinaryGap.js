function solution(N) {
  let binary = (N >>> 0).toString(2); //conversion to binary
  let counter = 0;
  let accum = [];
  let i = 0;
  let arr = binary.split('').map(Number);

  while (i < arr.length) {
    arr[i] === 0 ? counter++ : (accum.push(counter), (counter = 0));
    i++;
  }

  return Math.max(...accum);
}

let result = solution(101);
result;
