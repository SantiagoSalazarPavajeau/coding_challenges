// when the squares of its digits are added
// and the process is repeated
// find if the sum of the squares of the digits becomes 1


let sums = [];

var isHappy = function(n) {
    sums.push(n)

    if(n === 1){
        return true
    }
    
    let array = n.toString().trim().split('')
    let digits = []
    
    for(let i = 0; i<array.length; i++){
        digits.push(parseInt(array[i]))
    }
    
    let total= 0
    for(let i = 0; i<array.length; i++){
        total += digits[i] ** 2
    }
    
    if(sums.includes(total)){
        return false
    }

    return isHappy(total)
};

console.log(isHappy(7))