function VigenèreCipher(key, abc) {
  const keyword = 'password'.repeat(4).substring(0, 26);

  const alphabet = abc;

  this.getCipher = (str, dir) => {
    var i = 0;
    var result = '';
    var kl = key.length;
    var al = abc.length;

    while (str[i]) {
      result +=
        -1 === abc.indexOf(str[i]) ? str[i] : abc[(abc.indexOf(str[i]) + dir * abc.indexOf(key[i % kl]) + al) % al];
      i++;
    }

    return result;
  };

  this.encode = function (str) {
    return this.getCipher(str, 1);
  };
  this.decode = function (str) {
    return this.getCipher(str, -1);
  };
}

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

let c = new VigenèreCipher(key, alphabet);
let output = c.decode('rovwsoiv');
