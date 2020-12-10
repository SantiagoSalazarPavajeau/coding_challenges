// recursion solutions will usually be o(2^n) on binary tree searches

// some examples of binary tree searches are fibonacci, climbing stairs, max depth of tree etc.

const climbingStairsFast = (maxLevel) => {
    const treeData = {}
    console.log("top stair:", maxLevel)
    return recursion(0, maxLevel, treeData)
}
let recursionCount= 0
const recursion = (currentLevel, maxLevel, treeData) => {
    console.log(" ")
    console.log('recursion count', recursionCount++)
    console.log("current stair:", currentLevel)

    if(treeData[currentLevel]){
        console.log(treeData)
    }

    if (currentLevel > maxLevel){
        console.log("we are past top stair exit current recursion and return 0")
        return 0
    }

    if (currentLevel === maxLevel){
        console.log("success we found one way to climb the stairs ++1")
        return 1 // success we found a way to climb the stairs
    }
    
    if (treeData[currentLevel] > 0){
        console.log(treeData[currentLevel])
        return treeData[currentLevel]
    }

    let countOfWaysToClimb = recursion(currentLevel + 1, maxLevel, treeData) + recursion(currentLevel + 2, maxLevel, treeData)

    treeData[currentLevel] =  countOfWaysToClimb
    // whenever we find a way to climb we assign a value to the object
    console.log(' ')
    console.log(`recursion #${recursionCount -1} ended with ${treeData[currentLevel]} ways to climb`)
    console.log('amount of ways to climb stairs:', treeData[currentLevel])

    console.log(treeData)
    console.log("current stair:", currentLevel)
    console.log(treeData[currentLevel])
    return treeData[currentLevel]
}

climbingStairsFast(4)

//                   [0,3]
//                /         \
//             [1,3]        [2,3]
//            /    \        /    
//         [2,3]  [3,3]   [3,3]
//         /
//      [3, 3] 


//                      [0,4]
//                  /            \
//              [1,4]            [2,4]
//            /       \           /    \
//         [2,4]       [3,4]    [3,4]  [4,4]
//         /    \        /       /
//      [3, 4] [4,4]   [4,4]    [4,4] 
//     /
//   [4,4] 


// stairs : 3
// 1 or 2 steps


const climbStairsSlow = (maxLevel) => {
    return recursion_Tree_Slow(0, maxLevel)
}

// let recursionCount = 0
const recursion_Tree_Slow = (currentLevel, maxLevel) => {
    console.log(" ")
    console.log('recursion count', recursionCount++)
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
    console.log('current amount of ways to reach top stair:', recursion_Tree_Slow(currentLevel+1, maxLevel) + recursion_Tree_Slow(currentLevel+2, maxLevel))
    let countOfWaysToClimb = recursion_Tree_Slow(currentLevel+1, maxLevel) + recursion_Tree_Slow(currentLevel+2, maxLevel)
    return countOfWaysToClimb
}

// console.log(climbStairsSlow(3))