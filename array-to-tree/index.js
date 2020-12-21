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
    // array is sorted so node will be ordered if index is at half of array
    let root = new TreeNode(nums[mid]); 
    // create root on split array  (middle value)
    root.left = recursionArraytoBst(nums.slice(0, mid)) 
    // split array to not include center
    root.right = recursionArraytoBst(nums.slice(mid+1) ) 
    // splitting array makes tree balanced
    return root
}