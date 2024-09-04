def missing_number(nums):

    result = len(nums)

    for num in range(len(nums)):
        # XOR (^) 
        # if bits are equal return 0 ( ignore the carry )
        # if bits are different return 1 ( return the carry )
        result = result ^ num ^ nums[num]
    
    return result
    

nums = [3,0,1]

print(missing_number(nums))