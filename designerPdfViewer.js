// height[1, 3, 1] <= map for the right heights
// max <= compute the maximum height 
// area <= length(height) * max
// 3 * 3 => 9

const designerPdfViewer1 = (h, word) => {
    const array = Array.from(Array(10).keys());
    const asciiCodes = Array.from({ length: 26 }, (_, index) => index + 97);
    const heights = [];

    word.split('').forEach(letter => {
         const height = h[asciiCodes.indexOf(letter.charCodeAt(0))];
         heights.push(height);
    })

    return  Math.max(...heights) * word.length;
}

const designerPdfViewer2 = (h, word) => {
  const array = Array.from(Array(10).keys());
  const asciiCodes = Array.from({ length: 26 }, (_, index) => String.fromCharCode(index + 97));
  const heights = [];

  word.split('').forEach((letter) => heights.push(h[asciiCodes.indexOf(letter)]));

  return Math.max(...heights) * word.length;
};



const designerPdfViewer3 = (h, word) => { 
    const asciiCodes = Array.from({ length: 26 }, (_, index) => index + 97);
    return (
      Math.max(...word.split('').reduce((array, curr) => [...array, h[asciiCodes.indexOf(curr.charCodeAt(0))]], [])) *
      word.length
    );

}

const designerPdfViewer4 = (h, word) => { 
    const asciiCodes = Array.from({ length: 26 }, (_, index) => String.fromCharCode(index + 97));
    return (
      Math.max(...word.split('').reduce((array, curr) => [...array, h[asciiCodes.indexOf(curr)]], [])) *
      word.length
    );
}

const h = [1, 3, 1 ,3, 1 ,4, 1 ,3, 2 ,5 ,5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ,5, 5, 5, 5 ,5 ,7];
const word = "zaba";

const result1 = designerPdfViewer1(h, word);
result1
const result2 = designerPdfViewer2(h, word);
result2
const result3 = designerPdfViewer2(h, word);
result3
const result4 = designerPdfViewer4(h, word);
result4