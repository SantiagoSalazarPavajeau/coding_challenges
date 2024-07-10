let length = 0

const fourSum = (nums, target) => {
    length = nums.length
    nums.sort()
    return kSum(nums, target, 4, 0)
};

const kSum = (nums, target, k, index) => {
    let result = []
    
    if(index >= length) return result
    
    if(k==2){
        let i = index, j = length -1
        
        while(i < j) {
            
            if(target - nums[i] === nums[j]){
                let temp = []
                temp.push(nums[i])
                temp.push(target - nums[i])
                result.push(temp)
                
                while(i<j && nums[i]==nums[i+1]) i++;
                while(i<j && nums[j-1]==nums[j]) j--;
                i++
                j--
            }else if(target - nums[i] > nums[j]){
                i++
            }else{
                j--
            }
        }
    }else{
        for(let i = index; i < length - k + 1;i++ ){
            let temp = kSum(nums, target - nums[i], k-1, i+1)
            if(temp != null){
                for(let t of temp){
                    t.push(nums[i])
                }
                result.push(...temp)
            }
            while(i<length-1 && nums[i] === nums[i+1]){
                i++
            }
        }
    }
    return result
}



// const kSum = (nums, target, start, k) => {
//     let res = []
    
//     if( start === nums.length || nums[start] * k > target || target > nums[nums.length -1] * k){
//         return res
//     }
    
//     if(k == 2){
//         return twoSum(nums, target, start)
//     }
    
//     for(let i = start; i <nums.length ; i++){
//         if(i === start || nums[i - 1] != nums[i]){
            
//             for( let set of kSum(nums, target - nums[i], i+1, k -1)){
                
//                 // console.log(i,k) 
//                 console.log(res)
                
//                 res.concat([nums[i]])
                
//                 res[res.length -1].concat(set)
//             }
//         }
//     }
//     return res
// }

// function twoSum(nums, target, start){
//     let res = []
//     let lo = start, hi = nums.length - 1
    
//     while(lo < hi){
        
//         let sum = nums[lo] + nums[hi]
        
//         if (sum < target || (lo > start && nums[lo] == nums[lo - 1]))
//             ++lo;
//         else if (sum > target || (hi < nums.length - 1 && nums[hi] == nums[hi + 1]))
//             --hi;
//         else
//             res.push( [ nums[lo++], nums[hi--] ] )
        
//         // if(sum<target || (lo>start && nums[lo] === nums[lo-1]) ){
//         //     lo++
//         // }else if(sum > target || (hi < nums.length - 1 && nums[hi] == nums[hi + 1]) ){               hi-
//         // }else res.push( [ nums[lo++], nums[hi--] ] )
//     }
//     return res
// }