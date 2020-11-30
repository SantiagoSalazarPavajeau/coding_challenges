

const isValid = (string) => {
    const dataBrackets = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    let stack = []

    for(let i = 0; i< string.length; i++){
        let bracket = string[i]

        if(dataBrackets[bracket]){
            const stackPop = stack === [] ? '' : stack.pop()

            if(stackPop != dataBrackets[bracket]){
                return false
            }else {
                stack.push(bracket)
            }
        }
    }
    if(stack !== [])
        return false
}