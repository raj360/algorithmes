const nums = [2, 7, 11, 15],
  target = 9;

// a + b = target
//2, 1, 5, 3 => 4
//2, 7, 11, 15 => 9

indecies = [];

const map = new Map();

for (let i = 0; i < nums.length; i++){
    let result = target - nums[i];
    if(map.has(result)){
        console.log([map.get(result), i]);
    }else{
         map.set(nums[i], i);
    }
}

for (let i = 0; i < nums.length - 1; i++){
    for(let j = 1; j < nums.length; j++){
         let sum = nums[i] + nums[j];
         if (sum === target) {
           indecies = [...indecies, i, j];
         }
    }
}
console.log(indecies);







// // indecies


var timerArr = [];

const timer1 = setTimeout(() => {
     console.log('Inside timeout 1')
}, 1000)
console.log(timer1)
timerArr.push(timer1)
const timer2 = setTimeout(() => {
     console.log('Inside timeout 2')
}, 1000)
console.log(timer2)
timerArr.push(timer2);

while(timerArr.length){
    clearTimeout(timerArr.pop());
}