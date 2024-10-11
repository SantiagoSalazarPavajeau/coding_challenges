import pdb

def house_robber(nums):
    if len(nums) == 0: return 0
    if len(nums) == 1: return nums[0]
    if len(nums) == 2: return max(nums[0],nums[1])

    dp = [0]* len(nums)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])

    # range function does not include end
    # start from 3rd element in list
    for el in range(2, len(nums)):
        dp[el] = max(dp[el-1], dp[el-2]+nums[el])
    
    return dp[-1]

nums = [1,2,3,1]
print(house_robber(nums))