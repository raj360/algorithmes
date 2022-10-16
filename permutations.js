// const findPermutations = function(str){
//   const permutationArray = [];

//   if(!str || typeof str !== "string"){
//       return "String required"
//   }else if(str.length < 2){
//     return [str]
//   }


//   for(let i = 0; i < str.length; i++){
//     let char = str[i];
//     //Create a subproblem of string, each having  size n/b
//     let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length);

//     //Eliminate dublicates
//     if(str.indexOf(char) != i) continue;

//     //Combine results 
//     for( let permutation of findPermutations(remainingChars)){
//         permutationArray.push(char + permutation);
//     }
//   }

//   return permutationArray;
// }

// const result = findPermutations('abc');


// const string = 'ab'
// let i = 2
// const t = string.slice(0, i) + string.slice(i + 1, string.length);
// t

// const getPermutations =  (string) => {
//    const permutationsArray = [];
  
//   if(string.length < 2){
//     return [string]
//   }
  
//   for ( let i = 0; i < string.length; i++){
//     let char = string[i];
    
//     let  restOfChars = string.slice(0, i) + string.slice(i+1, string.length);

//     // if(string.indexOf(char) !== i) continue;
    
//     for (let permutation of getPermutations(restOfChars)){
//         permutationsArray.push(char + restOfChars);
//     }
    
//   }

//   return permutationsArray
// }

// function permutations(string) {
//   const result = getPermutations(string);
//   console.log(result);

//   return [...new Set(result)]

// }

// const result = permutations('aabb');
// result;
  

///////////// Permutations of an array ----------------
const arr = [1,2,3];

function permutationOfArray(arr){
  const result = [];

  const samples = (current) =>  {
    if(current.length === arr.length) result.push(current);

      arr.forEach((num) => {
        if (!current.includes(num)) samples([...current, num]);
      });
  }

  samples([]);

  return result;

}

const result = permutationOfArray(arr);
console.log({result});