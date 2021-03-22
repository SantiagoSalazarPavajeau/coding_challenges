// "(()" 2
// ")()())" 4
// "" 0

// stack and hashmap
// keep track of valids

const longestValidParentheses = (s) => {
    
    let stack = []
    stack.push(-1)
    
    let result = 0
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){// valid start
            stack.push(i)// add index so it can be used to calculate length
        }else{
            stack.pop()
            if(stack.length ===0){
            // valid because same amount of parenthesis have been pushed and popped 
                stack.push(i)
            }else{
                result = Math.max(result, i - stack[stack.length - 1])
                // calculate length by substracting current length - last valid index
            }
        }
    }
    return result
};