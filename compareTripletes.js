const a = [1, 2, 3];
const b = [3, 2, 1];


function compareTriplets(a, b) {
    let alice=0, bob = 0;

     a.map((value, index) => {
        if(value > b[index]){
            ++alice;
        }
         if(value < b[index]){
            ++bob;
        }
     })
  return [alice, bob]
}


const result=compareTriplets(a, b);

result;