// stack
// push opening brackets to stack
// pop only when bracket corresponds
// if there are still elements its not valid


const mB = (strings) => {
    // console.log(string)
    const dataBrackets = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    let result = []

    for(let string of strings){

        let stack = []
        // console.log(string, 1)
        let valid = true
        for(let i = 0; i< string.length; i++){

            let bracket = string[i]

            if(dataBrackets[bracket]){ // if current string is a closing bracket check if it corresponds to last opening bracket in stack
                let lastItem;
                // console.log(stack)
                // console.log(string)

                if(stack.length !== 0) lastItem = stack.pop()

                console.log(stack)
                console.log(string)
                // console.log(lastItem)
                // console.log(dataBrackets[bracket])

                if(lastItem !== dataBrackets[bracket]){ 

                    // if last opening bracket in stack does not correspont to current closing bracket
                    valid = false
                    break
                }

            } else {
                stack.push(bracket) // if its is an opening bracket
            }

        }
            valid ? result.push('YES') : result.push('NO')
    }
    return result
}


console.log(mB(['[{]}', '[{}]' ]))

// console.log(mB('[{]}'))
// console.log(mB('[({})]'))






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
// console.log(isValid('[{]}'))

// console.log(isValid('[({})]'))

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