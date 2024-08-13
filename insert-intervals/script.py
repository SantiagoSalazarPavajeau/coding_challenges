import pdb
def insert_interval(intervals, new_interval):
    result = []
    i = 0


    first = 0
    last = 1

    # add starting non-overlapping intervals to result
    while i < len(intervals) and intervals[i][last] < new_interval[first]:
        result.append(intervals[i])
        i += 1
        
    
    # combine overlapping intervals
    while i < len(intervals) and intervals[i][first] <= new_interval[last]:
        new_interval[first]= min(intervals[i][first], new_interval[first] )
        new_interval[last]= max(intervals[i][last], new_interval[last])
        i+= 1

    result.append(new_interval)

    # add ending non-overlapping intervals to result
    while i < len(intervals):
        result.append(intervals[i])
        i+= 1

    return result



intervals = [[1,3], [6,9]]

new_interval = [2,5]

print(insert_interval(intervals, new_interval))