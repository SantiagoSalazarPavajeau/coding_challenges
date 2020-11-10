// binary trees can be represented as nested objects with the keys: .val .right and .left

const ourBinaryTree = {
    val: 3,
    right: {
        val: 20,
        right: { 
            val: 7, 
            right: null, 
            left: null
        },
        left: { 
            val: 15, 
            right: null, 
            left: null
        }
    },
    left: {
        val: 9,
        right: null,
        left: null
    }
}

//          3
//         / \
//        9  20
//          /  \
//         15   7

// at the top root.val is 3 
// root.right is 20
// root.left is 9

// at node 20 node.val is 3
// node.right is 7
// node.left is 15

// binary trees are searched by recursion(the function calling itself)



const getMaxDepth = (root) => {
    if(root === null){ //if we reached an empty leaf return the count so far
        return 0 // this stops the count
    }
     // looping by recursion 
     // with two properties right and left
    console.log(Math.max( getMaxDepth(root.left) + 1 , getMaxDepth(root.right) + 1 ))
    return Math.max( getMaxDepth(root.left) + 1 , getMaxDepth(root.right) + 1 ) // 
}

//     1
//  2

getMaxDepth(ourBinaryTree)