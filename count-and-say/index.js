//  1.     1
//  2.     11
//  3.     21
//  4.     1211
//  5.     111221 
//  6.     312211
//  7.     13112221
//  8.     1113213211
//  9.     31131211131221
// 10.     13211311123113112211

// 7

var countAndSay = function(n) {
    
    let result = '1'
    
    for(let i = 1; i < n ; i++){ // loop until we get to n

        console.log(`current number ${i} still trying to get to ${n}:`)

        let sameDigits = ''
        let substringResult = ''

        for(let j = 0; j < result.length; j++){ //

            sameDigits += result[j]
                console.log('result[j+1]', result[j+1])
                // if(j+1 >= result.length || result[j] !== result[j+1])
                if( result[j] !== result[j+1]){ // if digits are different reset 
                    // java result[j+1] error array our of index

                    console.log('sameDigits: ', sameDigits)
                    console.log('count:', sameDigits.length)
                    console.log('number:', sameDigits[0])
                    substringResult += `${sameDigits.length}${sameDigits[0]}`

                    console.log('substringResult: ', substringResult)

                    sameDigits = ''
                }
        }
        result = substringResult
    }
    console.log('n:', n)
    return result
};

console.log(countAndSay(7))