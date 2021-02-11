const lengthOfLongestSubstring = (s) => {
    
    let sChars = s.split('')
    let substrings = new Set()
    
    // for(let i = 0; i< s.length; i++){
    let i = 0
    let j = i+1
    while(i< s.length){
        
        while(j<s.length){
            
            if(sChars[i] === sChars[j]){
                substrings.add(s.slice(i,j))
                j++
                continue
            }
            j++
        }
        i++
    }
    
    console.log(substrings)
    console.log([...substrings].sort((a,b)=> b.length - a.length)[0])
    
    return [...substrings][0].length
};