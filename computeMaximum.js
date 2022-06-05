const arr = [60, 50, 95, 80, 70];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    let temp = arr[i + 1];
    arr[i + 1] = arr[i];
    arr[i] = temp;
  }
}

let max = arr[arr.length - 1];

console.log({ max });
