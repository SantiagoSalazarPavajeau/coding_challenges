// check if tree node levels have 2 or more levels of difference in height



var isBalanced = function(root) {
    
    let balanced = true
    
    let traverse = (root) => {
        
        if(root === null) {
            return 0
        };
        
        let left = traverse(root.left) 
        // visit all nodes
        let right = traverse(root.right)
        
        if(Math.abs(left-right) >= 2){ 
            // absolute value is difference no matter if left of right is higher 
            //if its 2 or more is not balanced
            balanced = false
            return balanced
        }
        
        return Math.max(left, right) + 1 // count 1 more on nodes that have higher height 
    }
    traverse(root)
    return balanced
};