def maximum_subarray(nums):
    total_max = nums[0]
    current_max = nums[0]

    for num in nums[1:]:
        current_max = max(num, current_max + num)
        total_max = max(total_max, current_max)
    
    return total_max


