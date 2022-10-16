function angryProfessor(k, a) {
   const attendees =  a.filter(num => num <= 0);

  return  attendees.length >= k? "NO": "YES"
}

const k = 3
const a = [-2, -1, 0, 1, 2]
const k2 = 3;
const a2 = [-1, -3, 4, 2]
const result = angryProfessor(k2, a2);
result;