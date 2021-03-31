// only unique numbers in the combination


let combinationSum2 = (candidates, target) => {
    let result = []
    candidates.sort((a,b) => a-b)
    combine(result, [], candidates,target, 0)
    return result
};

const combine = (result, tempList, candidates , remainder, start) => {
    if(remainder < 0) return
    if(remainder === 0){
        result.push([...tempList]) 
        // add a **new array** containing current elements from tempList
        // or tempList elements will not be available to add to result
    }
    
    for(let i = start; i< candidates.length; i++){
        if(i > start && candidates[i] === candidates[i-1]) continue 
        // if loop has advanced from start
        // and if the last candidate is a duplicate
        // skip recursion to fin combinations
            
            tempList.push(candidates[i])
            combine(result, tempList, candidates, remainder - candidates[i], i +1)
            tempList.pop()
            
    }
}