function staircase(n) {
    let string = "", obj = {}
   for (let i = 0; i < n; i++){
     string += '#'
     obj[i] = string
   }
   let spaces = new Array(n).fill(0).map((v,i) => (i)).reverse().map(v => ` `.repeat(v))
   Object.values(obj).forEach((value, index) => console.log(`${spaces[index]}${value}`));
}


staircase(6)


/**
 * weird algorithms to print 
      # 
    ## 
   ### 
  #### 
 ##### 
###### 
 */