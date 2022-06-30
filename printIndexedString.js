// processData(input);

// Task
// Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

// Note:  is considered to be an even index.

function processData(input) {
  //Enter your code here
  let s = input.split('\n').filter((s) => s !== '');
  const length = input.length;
  const output = {};

  const result = s.reduce((accum, cur, index) => {
    let even = '',
      odd = '',
      i = 0;

      //eliminate any numbers
    if (parseInt(cur) > 0) {
      return;
    } else {
      for (let i = 0; i < cur.length; i++) {
        if (i % 2 === 0) {
          even += cur[i];
        } else {
          odd += cur[i];
        }
      }
      //returnn output
      output[index] = `${even} ${odd}`;
    }
    return output;
  }, {});

  Object.values(result).forEach((value) => console.log(value));
}

const r = '21';
const t = 'Rank';
const s = 'Hacker';
const input = `
2
Hacker
Rank
`;

const input2 = `
10
ovyvzvptyvpvpxyztlrztsrztztqvrxtxuxq
holtm
uvzxrumuztyqyvpnji
tmruzxzuwoskqysxztuvosuyrswrnmtxvzsrqwytzrxpltrwusxupw
wxstwxuzuyuvyzrsxysxyuvyqxuxyskqwsyqumqrvopvowqumnvrxpwqpwsrnvrztxrxpvuxunvyzvupvupowvyzvzuzwvsrwv
yrzxrxskrtlpwpmtpxvowrxrpxq
pryumtuntmovpwvowslj
nosklrxrtyuxtmnurzsryuxtywqwqpxts
fmpszyvqwxrtvpuwqszvyvotmsxsxuvzyvpwzrpmuxqwtswvytytzsnuxuyrpvtysqoutzurqxury
jkmsxzwrxzy
`;
processData(input);
