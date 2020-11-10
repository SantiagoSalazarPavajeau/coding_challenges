// binary trees have the methods .val .right and .left

//          3
//         / \
//        9  20
//          /  \
//         15   7

// at the top root.val is 3 
// root.right is 20
// root.left is 9

// binary trees are searched by recursion(the function calling itself)

// const treeDepth = (root) => {
//     if(root === null) return 0 //
//     return Math.max(treeDepth(root.right), treeDepth(root.left))
// }

const getMaxDepth = (root) => {
    if(root === null){ //if we reached an empty leaf return the count so far
        return 0
    }
     // looping by recursion 
     // with two properties right and left
    return Math.max( maxDepth(root.left) +1 , maxDepth(root.right) +1 )
}

//     1
//  2