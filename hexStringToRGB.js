function hexStringToRGB(hexString) {
  hexString = hexString.replace('#', '');
  let r = parseInt(hexString[0] + hexString[1], 16);
  let g = parseInt(hexString[2] + hexString[3], 16);
  let b = parseInt(hexString[4] + hexString[5], 16);
  return { r, g, b };
}

function hexStringToRGB(h) {
  return {
    r: parseInt(h.slice(1, 3), 16),
    g: parseInt(h.slice(3, 5), 16),
    b: parseInt(h.slice(5, 7), 16),
  };
}

const hexStringToRGB = (str) => {
  let result = str
    .match(/\w{2}/g) //split a string into two
    .map((x) => parseInt(x, 16));
  return { r, g, b };
};

const hexStringToRGB = (hexString) =>
  (([r, g, b]) => ({ r, g, b }))(hexString.match(/\w{2}/g).map((val) => parseInt(val, 16)));

// console.log(hexStringToRGB('#FF9933'));
