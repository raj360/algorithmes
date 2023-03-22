// technique sliding window technique
const lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  const lookup = new Map();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    if (lookup[char] !== undefined && lookup[char] >= left) {
      left = lookup[char] + 1;
    }

    lookup[char] = right;

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// left  right
//  a     b    c    a   b    c   b    b
// ->|<-
//  lookup {a: 0 .... a: 3} for visited pointer
//

const s = 'tweerw';
const result = lengthOfLongestSubstring(s);

result;
