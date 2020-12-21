/// given a sorted array
// convert to binary tree
// where the roots have a lower and higher number
// where the levels are balanced max +1 depth on parallel nodes


var sortedArrayToBST = function(nums) {
    return recursionArraytoBst(nums)
    

};

const recursionArraytoBst = (nums) => {
    if(nums.length === 0) return null;
    let mid = Math.floor(nums.length/ 2)
    let root = new TreeNode(nums[mid]);
    root.left = recursionArraytoBst(nums.slice(0, mid))
    root.right = recursionArraytoBst(nums.slice(mid+1) )
    return root
}