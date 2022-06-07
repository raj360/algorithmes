// var alphabet = 'abcdefghijklmnopqrstuvwxyz';
// var key = 'password';

// function VigenèreCipher(key, abc) {

//   const keyword = 'password'.repeat(4).substring(0, 26);

//   const alphabet = abc;

//   this.getCipher = (row,column)=>{
//       console.log({row,column});
//      for (var i = 0; i < alphabet.length; i++){
//         let r =  alphabet.indexOf(row)
//          for(var j = 0; j < alphabet.length; j++){
//            let c = alphabet.indexOf(column);

//            console.log({r,c})
//          }
//      }
//   }

//   this.encode = function (str) {
//     str.split('').forEach(char => {
//      let index = abc.indexOf(char);
//     this.getCipher(char, keyword[index] )
//     });
//   };
//   this.decode = function (str) {
//     //...
//   };
// }

function VigenèreCipher(key, abc) {
  (this.compute = function (str, dir) {
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
  }),
    (this.encode = function (str) {
      return this.compute(str, 1);
    });
  this.decode = function (str) {
    return this.compute(str, -1);
  };
}

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

let c = new VigenèreCipher(key, alphabet);
c.encode('codewars');
