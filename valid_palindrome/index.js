// is the string a palindrome?
// reads same reversed/backwards?


const validPalindrome = (s) => {
    let clean = s.toLowerCase().replace(/[^a-z\d]/g, '')
    
    let arrayS = clean.split('')

    
    if (clean === arrayS.reverse().join('')){
        return true
    }
    
    return false
}