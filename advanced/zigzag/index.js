var convert = function(s, numRows) {
    
    let result = []
    
    for(let i = 0; i<numRows; i++){
        result[i] = ''
    }
    
    console.log(result)
    
    // iterate over length of string

    let i= 0
    while(i<s.length){
        // use decreasing and increasing index to add corresponding character
        for(let inc = 0; inc < numRows && i < s.length; inc++){
            result[inc] += s[i++]
            //add character to existing string in the index
        }
        for(let dec = numRows -2 ; dec >=  1 && i < s.length; dec--){
            result[dec] += s[i++]
        }
        
    }
    
    return result.join('')
}