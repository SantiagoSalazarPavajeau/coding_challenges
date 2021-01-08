// check if a tree path adds to the target sum



const hasPathSum = (root, sum) => {
            
    if(root === null) return false 

    if(sum === root.val && root.left === null && root.right === null){
        //if leaf is equal to the substraction
        return true; 

    }

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
    // if the path has a correct addition
    // the sum as we substract
    // will become equivalent to the last node
};