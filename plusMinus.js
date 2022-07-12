function plusMinus(arr) {
  let sample = [0, 0, 0];

  arr.forEach((num) => {
    num > 0 ? sample[0]++ : num < 0 ? sample[1]++ : sample[2]++;
  });

  sample.map((num) => num / arr.length).forEach((num) => console.log(num.toFixed(6)));
}

let arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);
