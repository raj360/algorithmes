/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function timeConversion(s) {
  let [hours, minutes, seconds] = s.split(/(PM|AM)/gm)[0].split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (s.endsWith('PM')) {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}:${seconds}`;
}

const s = '07:05:45PM';
console.log(timeConversion(s));
