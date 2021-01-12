// given a number return the excel column equivalent
// 1 -> 'A'
// 26 -> 'Z'
// 27 -> 'AA'

var convertToTitle = function(n) {
    let title = ''
    
    for(let i = n; n > 0;){ // n-- inside for loop declaration won't work
        
        n--
        console.log(n % 26)
        // this returns the number to add to 65 to reach character
        // for Y its 24

        title += String.fromCharCode(65 + (n % 26)) // first character is actually last of result
        // fromCharCode takes decimal as argument
        // returns char 
        // 65 returns 'A' and it increments alphabetically
        
        console.log(title)
        
        console.log('before', n)
        
        n = Math.floor(n / 26) 
        // when lower than 26 the loop stops
        // n becomes 0
        
        console.log('after', n)
    }
    return title.split('').reverse().join(''); 
};