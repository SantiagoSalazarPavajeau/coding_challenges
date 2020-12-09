// recursion solutions will usually be o(2^n) on binary tree searches

// some examples of binary tree searches are fibonacci, climbing stairs, max depth of tree etc.

const climbingStairsFast = (maxLevel) => {
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

// climbingStairsFast(3)


// stairs : 3
// 1 or 2 steps


const climbStairsSlow = (maxLevel) => {
    return recursion_Tree_Slow(0, maxLevel)
}

const recursion_Tree_Slow = (currentLevel, maxLevel) => {

    console.log('current stair:', currentLevel)
    console.log('top stair', maxLevel)

    if(currentLevel > maxLevel){
        console.log('we have gone over top stair')
        return 0 // it does not count when we go over top level
    }

    if(currentLevel === maxLevel){
        console.log('we have reached the top stair')
        return 1 // only count + 1 when we reached top level
    }
    // console.log('current amount of steps:', recursion_Tree_Slow(currentLevel+1, maxLevel) + recursion_Tree_Slow(currentLevel+2, maxLevel))
    return recursion_Tree_Slow(currentLevel+1, maxLevel) + recursion_Tree_Slow(currentLevel+2, maxLevel)
}

console.log(climbStairsSlow(3))