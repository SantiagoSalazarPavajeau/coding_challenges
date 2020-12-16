// find the highest consecutive/continous sum of elements in the array
// shoutout to  @thechanmoon

const maxSubArray = (nums) => {
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) { // starts at index one to compare and acculumate 
        console.log(nums)
        console.log("i", i)

        if (nums[i - 1] > 0) { // if the accumulation sum is positive
            console.log('last sum: ', nums[i-1])

            nums[i] += nums[i - 1]; // accumulate current element by adding current to last

            console.log('new sum', nums[i])
        }



        sum = Math.max(nums[i], sum); 
        // save highest number either current sum of previous higher sum

        console.log('highest sum:', sum)

        // sum = nums[i] > sum ? nums[i] : sum
    }
    return sum;
};

console.log(maxSubArray([1,1,-4,1,2,1]))

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

