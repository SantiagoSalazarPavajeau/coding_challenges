// recursion solutions will usually be o(2^n) on binary tree searches

// some examples of binary tree searches are fibonacci, climbing stairs, max depth of tree etc.

const recursionTreeMemoization = (maxLevel) => {
    const treeData = {}
    return recursion(0, maxLevel, treeData)
}

const recursion = (currentLevel, maxLevel, treeData) => {
    console.log(treeData)
    if (currentLevel > maxLevel){
        return 0
    }
    if (currentLevel === maxLevel){
        return 1
    }
    if (treeData[currentLevel] > 0){
        return treeData[currentLevel]
    }
    treeData[currentLevel] = recursion(currentLevel + 1, maxLevel, treeData) + recursion(currentLevel + 2,maxLevel, treeData)
    console.log(treeData[currentLevel])
    console.log(treeData)
    return treeData[currentLevel]
}

recursionTreeMemoization(3)