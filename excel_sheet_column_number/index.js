// given an excel column return the excel number equivalent
// 'A' -> 1
// 'AB' -> 28
// 'ZY' -> '701'


var titleToNumber = function(s) {
    
    let result = 0
    let power = 0

    for(let i =s.length -1; i>=0;i--){
        
        result += (s.charCodeAt(i) - 64) * (26 ** power) 
        // formula to decode used with HEX, etc... value * (base ^ power)
        // charCodeAt returns the unicode for the character
        // 'AB'.charCodeAt(0) -> 65

        power++

    }
    
    
    return result
};