var combinationSum = function(candidates, target) {
    let result  = []
    candidates.sort((a,b) => a - b) 
    combination(candidates, target, [], result, 0)
    
    return result
};

let combination = (candidates, target, stack, result, start) => {
    
    if(target < 0 ){ // skip case
        return
    }else if(target === 0 ){ // base case
        console.log(true)
        console.log(stack)
        console.log(target)
        result.push([...stack])
        console.log(result)
    }else{
        for(let i = start; i < candidates.length; i++){ // depth first search
            stack.push(candidates[i])
            combination(candidates, target - candidates[i], stack, result, i) // recursion
            stack.pop()
        }
    }
}