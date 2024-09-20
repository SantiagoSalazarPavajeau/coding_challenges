def non_overlapping_intervals(intervals):
    intervals.sort(key=lambda x: x[1])
    end = float("-inf")
    count =0

    for interval in intervals:
        # if the first number of the next interval 
        # is larger than the second number of the previous interval
        # there is no overlap
        if interval[0] >= end:
            end = interval[1]
        else:
            count += 1
    
    return count


intervals = [[1,2], [2,3], [3,4], [1,3]]
print(non_overlapping_intervals(intervals))