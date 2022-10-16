//number < 3
//modulas with 5 != 0

//curr = 84
//const reminder = curr%5
//const diff = 5-reminder
//if(diff < 3) curr + reminder
//else curr

 const makeRoundOff = (curr)=> {
    if(curr < 38) return curr
    else {
        const reminder = curr % 5;
        const diff = 5 - reminder;
        if (diff < 3) return curr + diff;
        else return curr;
    }
 }

 var testing = makeRoundOff(57)
 testing

const  gradingStudents =  (grades) =>  grades.map(makeRoundOff)

const grades = [73, 67, 38, 33]
 var result = gradingStudents(grades);
 result; 



//arr = [1,2,1,2,1,3,2] 
// loop through the array  
//group  (*) by count
// count = [2222].length
// if (count is odd)  numberOfPairs = (count -1) / 2
// else 
// numberOfPairs =  (count) /2
// arr [pairs]
// the sum of this pairs []


const sockMerchant = (arr)=> {
   return  Object.values(arr.reduce((groups, element) =>  ( { ...groups, [element]: groups[element] + 1  || 1  }), {}))
   .map(number => {
    if (number % 2 === 0) return  number / 2;
    else return (number - 1) / 2;
   })
   .reduce((a, b) => a + b)
};


const arr = [1, 2, 1, 2, 1, 3, 2]

var result = sockMerchant(arr);

result; 
