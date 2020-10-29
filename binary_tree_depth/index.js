// binary trees have the methods .val .right and .left

//          3
//         / \
//        9  20
//          /  \
//         15   7

// at the top .val is 3 
// .right is 20
// .left is 9

// binary trees are searched by recursion(the function calling itself)

const treeDepth = (root) => {
    if(root === null) return 0 //
    return Math.max(treeDepth(root.right), treeDepth(root.left))
}

const getMaxDepth = (root, sum) => {
    if(!root){ //if we reached an empty leaf return the count so far
        return sum
    }
     // looping by recursion 
     // with two properties right and left

    if( getMaxDepth(root.left, sum++) < getMaxDepth(root.right, sum++)){
        return getMaxDepth(root.right,)
    }else{
        return getMaxDepth(root.left, sum++)
    }
}

//     1
//  2