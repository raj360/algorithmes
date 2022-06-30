// Task
// Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

// Note:  is considered to be an even index.

function processData(input) {
  //Enter your code here
  const length = input.length;
  let even = '',
    odd = '';

    if(typeof input !== 'string') {
        console.log(' ')
    }

  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      even += input[i];
    } else {
      odd += input[i];
    }
  }

  console.log(`${even} ${odd}`);
}

const r = '2';
const t = 'Rank';
const s = 'Hacker';
processData(d);
console.log("Dog")