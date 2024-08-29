import pdb

def container_with_most_water(heights):

    left = 0
    right = len(heights) -1
    result = 0

    while left < right:
        width = right - left

        # pdb.set_trace()
        max_area = min(heights[left], heights[right]) * width

        result = max(max_area, result)

        # move pointer past the smallest side
        if heights[left] <= heights[right]:
            left += 1
        else:
            right -= 1
    
    return result

heights = [1,8,6,2,5,4,8,3,7]

print(container_with_most_water(heights))