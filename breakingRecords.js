function breakingRecords(scores) {
  // Write your code here
  let min = scores[0],
    max = scores[0],
    counts = { max: 0, min: 0 };

  for (const score of scores) {
    //increment min count
    if (score < min) {
      counts['min'] += 1;
      min = score;
    }
    //increment max count
    if (score > max) {
      counts['max'] += 1;
      max = score;
    }
  }

  return Object.values(counts);
}
let score1 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let score2 = [12, 24, 10, 24];

console.log(breakingRecords(score1));
