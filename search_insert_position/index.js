

const searchInsert = (nums, target) => {
    for(let i = 0; i<nums.length;i++){
        if(nums[i] === target){
            return i
        }else if(nums[i]<target && nums[i+1]>target){
            return i+1
        }else if(nums[i]<target && !nums[i+1]){
            return i+1
        }else if (nums[0]>target){
            return 0
        }
    }
}