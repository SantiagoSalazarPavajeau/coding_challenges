/// find the zeroes on the right side of the number
// 5 -> 120 ----> 1 zero on right so returns 1
// 7 -> 5040 ----> 1 zero also on right returns 1

// factorial is the multiplication of all lower numbers
// 3! = 3*2*1 -> 6
// 5! = 5*4*3*2*1 -> 120


var trailingZeroes = function(n) { /// only works on small integers
    if(n === 0)return 0
    let factorial = n
    
    for(let i = n-1; i>0 ; i--){ // find factorial by looping down
        factorial *= i
    }
    console.log(factorial)
    let string = factorial.toString()
    let count = 0
    
    for(let i = string.length-1; i>0; i--){ // count zeros only on far right
        if(string[i] === '0' && string[i-1] !== '0'){
            count++
            return count
        }else if (string[i] === '0' && string[i-1] === '0'){
           count++
        }else{
            break
        }
    }
    return count 
};



let factorialTrailing0s = (n) => {
    let count = 0; 
  

    for (let i = 5; n / i >= 1; i *= 5) { 
        // loop to find how many 5s in prime factors 
        // if our number(n) is greater than 1 when divided by five we count++
        // 10/5 = 2 there are two prime factors 5 in 10
        // 10/25 = 0.4 -> exit the loop
        // so there are 2 trailing zeroes

        count += Math.floor(n / i); 
  }
    return count;
}