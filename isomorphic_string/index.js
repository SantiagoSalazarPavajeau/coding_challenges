// given two strings
// if a character has already been mapped to another string
// its not isomorphic

let isIsomorphic = (s, t) => {
    let sMap= {}
    let tMap= {}
    
    for(let i = 0; i< s.length; i++){
        if(sMap[s[i]] === undefined){
            sMap[s[i]] = i
        }
        
        if(tMap[t[i]] === undefined){
            tMap[t[i]] = i
        }
        
        if(sMap[s[i]] !== tMap[t[i]]){
            return false
        }
    }
    return true
};