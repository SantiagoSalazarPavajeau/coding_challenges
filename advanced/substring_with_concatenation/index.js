// "barfoothefoobarman"
// ["foo","bar"]
// "wordgoodgoodgoodbestword"
// ["word","good","best","word"]
// "barfoofoobarthefoobarman"
// ["bar","foo","the"]

// find if the string contains all the words consecutively in any order
// return indeces of start

const findSubstring = (s, words) => {
    let result = []
    
    if(s === '' || words.length === 0) return []
    
    let l = words[0].length
    
    let hm = {} // hashmap of words
    
    for(let word of words) { // count any duplicate words
        hm[word] = hm[word] ? hm[word] + 1 : 1 
    }
    
    for(let i = 0; i <= s.length - (l * words.length); i++){ // all words have same length
        
        let copy = {...hm} // immutable copy to not modify hm
        
        for(let j = 0; j < words.length; j++){
            
            let substring = s.substring(i+ (j*l), i + (j*l) + l) // subtrings will have length l

            if(copy[substring]){
                
                let count = copy[substring]
                
                // count down as we find the substring from string in hashmap
                if(count === 1) {
                    
                    delete copy[substring]
                    
                }else {
                    
                    copy[substring] = count - 1
                }

                // if all substrings have been found add index to result
                if(Object.keys(copy).length === 0){
                    result.push(i)
                    break
                }
            }else{
                break
            }
        }
    }
    
    return result
};