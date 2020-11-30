

const isValid = (string) => {
    console.log(string)
    const dataBrackets = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    let stack = []
    for(let i = 0; i< string.length; i++){
        let bracket = string[i] 

        console.log(string[i], `character at ${i} index outside if`)
        // if(dataBrackets[bracket] === bracket){ // if string[i] is a closing bracket 

        if(bracket === `}`|| bracket === `]`|| bracket === `)`){ // if string[i] is a closing bracket 

            console.log(bracket, `bracket is a closing bracket`)

            console.log(stack, 'stack')

            const stackPop = stack === [] ? '#' : stack.pop() // eliminate last item

            console.log(stack, 'stack')

            if(stackPop !== dataBrackets[bracket]){ // if 
                return false
            }

        } else { // if string[i] is a opening bracket
            stack.push(bracket) // add last item
        }
    }

    if(stack.length !== 0)
        return false

    return true
}
console.log(isValid("()"))


const isValidNosubExpressions = () => {
      
    let sqBracket = 0
    let cuBracket = 0
    let paBracket = 0
    
    for(let i = 0; i<=s.length; i++){
        
        if(s[i] === "["){
           sqBracket++ 
        }
        if(s[i] === "{"){
           cuBracket++ 
        }
        if(s[i] === "("){
           paBracket++ 
        }
    }
    
    for(let i = 0; i<=s.length; i++){
        
        if(s[i] === "]"){
           sqBracket--
        console.log(sqBracket)
        }
        
        if(s[i] === "}"){
           cuBracket-- 
        console.log(cuBracket)
        }
        
        if(s[i] === ")"){
           paBracket--
        console.log(paBracket)
        }
    
    }
    
    if(sqBracket !== 0 || cuBracket !== 0 || paBracket !== 0)
        return false
    
    return true
}