function xyz(s) {
  if (!s) {
    return '';
  }

  const n = s.length;
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
  let ans = '';
  let max_len = 0;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1]);

      if (dp[i][j] && j - i + 1 > max_len) {
        max_len = j - i + 1;
        ans = s.substring(i, j + 1);
      }
    }
  }

  return ans;
}

const result = xyz('babaddabc');
result;
