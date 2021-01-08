// is the string a palindrome?
// reads same reversed/backwards?


const validPalindrome = (s) => {
    let clean = s.toLowerCase().replace(/[^a-z\d]/g, '')  
    // regex .replace method 
    // g flag is for global matches so wont stop after the first match is found
    // a-z return only  characters
    // \d return only digits
    //  '' all non characters and non digits replace with an empty string
    
    let arrayS = clean.split('')

    
    if (clean === arrayS.reverse().join('')){
        return true
    }
    
    return false
}