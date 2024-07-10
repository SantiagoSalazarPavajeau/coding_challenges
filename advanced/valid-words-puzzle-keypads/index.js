var findNumOfValidWords = function(words, puzzles) {
    let hm = {}
    
    for(let word of words){
        let mask = 0
        for(let i = 0; i < word.length; i++){
            mask |= 1 << (word.charCodeAt(i) - 'a'.charCodeAt(0))
            // add a 1 bit to position word.charCodeAt(i) from each character
            // 
        }
        // console.log(mask)
        hm[mask] = hm[mask] ? hm[mask]+1 : 1
    }
    
    let result = []
    
    for(let puzzle of puzzles){
        let mask = 0
        for(let i  = 0; i < puzzle.length; i++){
            mask |= 1 << (puzzle.charCodeAt(i) - 'a'.charCodeAt(0))
        }
        let count = 0
        let substring = mask
        let firstChar = 1 << (puzzle.charCodeAt(0) - 'a'.charCodeAt(0))
        
        while(true){

            if((substring & firstChar) === firstChar && hm[substring]){
                console.log(substring)
                console.log(firstChar)
                console.log(substring & firstChar)
                count += hm[substring]
            }
            
            if(substring === 0) break
            
            substring = (substring - 1) & mask
        }
        
        result.push(count)
    }
    return result
}

console.log(findNumOfValidWords(["aaaa","asas","able","ability","actt","actor","access"],["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]))