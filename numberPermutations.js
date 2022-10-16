const re = /\d{3}/g;
 str = '123';
var m,
  res = [];

while ((m = re.exec(str))) {
  res.push(m[0]);
  re.lastIndex = m.index + 1; // <- Important
}

console.log(res); //[ '123', '234', '345' ]