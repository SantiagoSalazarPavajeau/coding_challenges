// find the minimum height of the binary tree

const minDepth = (root) => {
    
    if(root === null){ 
        return 0 
    }
    
    if( root.left === null){
        return minDepth(root.right) + 1 // account for right only trees
    }
    
    if(root.right === null){
        return minDepth(root.left) + 1 // account for left only trees
    }

    return Math.min( minDepth(root.left) + 1 , minDepth(root.right) + 1 )  // o(2^n) slow solution
}