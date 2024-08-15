import pdb
def longest_consequtive_sequence(nums):
    the_set = set(nums)
    result = 0

    for number in nums:
        if number-1 not in the_set:
            current_result = number + 1
            # pdb.set_trace()
            # we count starting from numbers in list
            while current_result in the_set:
                current_result += 1

            # the (current_result - number ) resets the count to 0 for the result
            result = max(result, current_result - number)

    return result
        


nums = [0,3,7,2,5,8,4,6,0,1]
nums1 = [100,4,200,1,3,2]

print(longest_consequtive_sequence(nums))
print(longest_consequtive_sequence(nums1))