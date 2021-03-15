
const longestCommonPrefix = (strs) => { // O(nlogn) bc of sort
    
    if(strs.length === 0) return ''
    strs.sort() // sort alphabetically 
    
    let result = ''
    
    for(let i =0; i< strs[0].length; i++){
        if(strs[0][i] !== strs[strs.length -1][i])
            return result //exit when no match
        result+=strs[0][i] // add when match
    }
    return result
};