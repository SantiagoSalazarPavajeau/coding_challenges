repeatedStrings("aba", 10)

function repeatedStrings(string, totalNumberOfChars){
    const numberOfAs = s.match(/a/g).length
    const wholeTimesToRepeat = Math.floor(n/s.length)
    const remainingAs = (s.substring(0, n % s.length).match(/a/g)).length
    return numberOfAs * wholeTimesToRepeat + remainingAs
}

//need different indexes 
//one to keep track of how many letters to add 
//and the other one to start adding letters from the beggining of the arrayforrepeat

return (s.match(/a/g) || []).length * Math.floor(n/s.length) + (s.substring(0, n % s.length).match(/a/g) || []).length;
