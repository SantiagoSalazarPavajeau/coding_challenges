// find the highest consecutive/continous sum of elements in the array
// shoutout to  @thechanmoon

var maxSubArray = function(nums) {
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        console.log(nums)

        if (nums[i - 1] > 0) {

            console.log('last sum: ', nums[i-1])

            nums[i] += nums[i - 1]; // modify current element by adding last

            console.log('new sum', nums[i])
        }



        sum = Math.max(nums[i], sum); 
        // save highest number either current sum of previous higher sum

        console.log('highest sum:', sum)

        // sum = nums[i] > sum ? nums[i] : sum
    }
    return sum;
};

console.log(maxSubArray([-1,2,-3,4,2,7,-4,5]))

// var maxSubArray = function(nums) {
//     let max = Math.max(...nums);
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++)
//     {  
//         sum = 0;
//         for(let j = i; j < nums.length; j++)
//         {
//             sum+=nums[j]; 
//             max = Math.max(sum,max);
//         }
//     }
//     return max;
// };

