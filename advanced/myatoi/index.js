const myAtoi = (s) => {
    let string = s.trim().split('')
    
    
    let max = Math.pow(2,31) // max min integers for no overflow
    let min = Math.pow(-2,31)
    
    
    let negative = false
    if(isNaN(string[0]) && string.includes(' ')){ 
        return 0
    }else if(string[0] === '-'){ 
        if(isNaN(string[1])) return 0 // isNaN -> is it 'Not a Number' ?
        negative = true
        string.shift()
    }else if(string[0] === '+'){
        if(isNaN(string[1])) return 0
        string.shift()
    }else if(isNaN(string[0])){
        return 0
    }
    
    
    let ans = ''
    let i = 0
    
    while(!isNaN(string[i])){
        ans += string[i]
        i++
        
    }
    
    console.log(ans)
    
    if(ans >= max && negative) return min 

    
    if(ans >= max) return max - 1
    
       
    if(negative) return ans * -1
    
    return ans
}

