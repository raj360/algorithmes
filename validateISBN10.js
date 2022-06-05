function validISBN10(isbn) {
  if (isbn.length !== 10) {
    return false;
  }

  let firstNine = isbn
    .split('')
    .map((n) => n)
    .splice(0, isbn.length - 1);

  //Checking if the first nine are numbers and the ISBN value's length is 10
  if (firstNine.every((n) => !isNaN(n))) {
    let isValidISBN =
      isbn
        .split('')
        .map((n) => (n === 'X' ? '10' : n))
        .map((n, i) => parseInt(n, 10) * (i + 1))
        .reduce((sum, n) => sum + n) % 11;
    return !isValidISBN;
  } else {
    return false;
  }
}

console.log(validISBN10('048665088X'));
// console.log(validISBN10('ABCDEFGHIJ'))
