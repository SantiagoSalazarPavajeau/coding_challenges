def house_robber_ii(nums):
    if len(nums) == 0: return 0
    if len(nums) == 1: return nums[0]
    if len(nums) == 2: return max(nums[0],nums[1])

    def rob(nums):
        prev, curr = 0, 0 

        for house in nums:
            prev, curr = curr, max(curr, prev + house)
        return curr
    
    return  max(rob(nums[:-1], rob(nums[1:])))