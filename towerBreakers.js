function towerBreakers(n, m) {
  if (n % 2 == 0 && m !== 1) {
    return 2;
  } else if (n % 2 != 0 && m !== 1) {
    return 1;
  } else if (m === 1) {
    return 2;
  }
}

console.log(6 % 2);

const n = 2,
  m = 6;

const result = towerBreakers(n, m);

console.log(6 % 2);

result;