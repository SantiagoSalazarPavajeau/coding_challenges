def longest_increase_subsequence(nums):
    if not nums:
        return 0
    
    dp = [1] * len(nums)

    for i in range(len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                # keep track of counts
                dp[i] = max(dp[i] , dp[j] +1)
    
    return max(dp)

print(longest_increase_subsequence(nums = [10,9,2,5,3,7,101,18]))