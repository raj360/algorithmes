function lonelyinteger(a) {
  let lonelyinteger = 0;
  const duplicates = a.filter((num, index) => a.indexOf(num) !== index);

  a.forEach((num) => {
    if (!duplicates.includes(num)) {
      lonelyinteger = num;
    }
  });
  return lonelyinteger;
}

const result = lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
result;
