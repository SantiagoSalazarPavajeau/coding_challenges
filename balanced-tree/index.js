var isBalanced = function(root) {
    
    let balanced = true
    
    let traverse = (root) => {
        
        if(root === null) {
            return 0
        };
        
        let left = traverse(root.left)
        let right = traverse(root.right)
        
        if(Math.abs(left-right) > 1){
            balanced = false
            return balanced
        }
        
        return Math.max(left, right) + 1
            
    }
    traverse(root)
    return balanced
};