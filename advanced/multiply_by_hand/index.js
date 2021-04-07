const multiply = (num1, num2) => {
    
    let mults = new Array(num1.length + num2.length)
    
    for(let i = num1.length -1; i >= 0; i--){
        for(let j = num2.length - 1 ; j >= 0; j--){
            
            let charCode1 = num1.charCodeAt(i) - '0'.charCodeAt(0)
            console.log(charCode1)
            
            let charCode2 = num2.charCodeAt(j) - 48
            console.log(charCode2)
            mults[i+j+1] += charCode1 * charCode2 // Nan eventhough mult works
        }
    }
    console.log(mults)
    
    let carry = 0
    for(let i = mults.length -1; i>=0; i--){
        let temp = (mults[i] + carry) % 10
        carry = (mults[i] + carry ) / 10
        mults[i] = temp
    }
    let result = []
    for(let num of mults){
        result.push(num)
    }
    console.log(result)
    while(result.length != 0 && result[0].charCode(0) === 48) result.shift()
    
    return result.length === 0 ? '0' : result.join('')
};