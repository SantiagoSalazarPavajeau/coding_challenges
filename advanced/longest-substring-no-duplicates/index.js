
const fastLengthOfLongestSubstring = (s) => {
    if(s.length === 0)return 0
    let map = {}
    let left = 0
    let max= 0
    
    for(let right = 0; right < s.length; right++){
        // check if char has been added to map
        // add to map
        // or change pointers

        // carefully compare max for real position and real length
        
        let currChar = s[right]
        
        if(map[currChar]){
            left = Math.max( left , map[currChar] + 1)
        } 
        // compare pointers to max
        
        max = Math.max(max, right-left + 1)
        
        map[currChar] = right
    }
    return max
}




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