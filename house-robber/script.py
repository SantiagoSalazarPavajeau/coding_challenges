import pdb

def house_robber(nums):
    if len(nums) == 1: return nums[0]
    if len(nums) == 2: return max(nums[0],nums[1])

    dp1 = [0]* len(nums)
    dp2 = [0]* len(nums)

    def rob(start, end, dp, nums):
        dp[start] = nums[start]
        dp[start+1] = max(dp[start], nums[start+1])
        # pdb.set_trace()
        for el in range(start+2, end):
            # pdb.set_trace()
            dp[el] = max(dp[el-1], dp[el-2]+nums[el])
    
    rob(0,len(nums)-1, dp1, nums)
    rob(1,len(nums), dp2, nums)
    # pdb.set_trace()
    return max(dp1[len(nums)-2], dp2[len(nums)-1])

nums = [1,2,3,1]
print(house_robber(nums))