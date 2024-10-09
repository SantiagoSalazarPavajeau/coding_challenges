import heapq

def meeting_rooms_ii(intervals):
    if not intervals:
        return 0
    
    intervals.sort(key=lambda x: x[0])


    heap = []

    # store first end time in the heap
    heapq.heappush(heap, intervals[0][1])

    for i in range(1,len(intervals)):
        # if the start time is later than the end time
        # the meeting room becomes free
        if  heap[0] <= intervals[i][0]:
            # only leave the intervals that overlap in the heap
            heapq.heappop(heap)

        # store the other end-times in the heap
        heapq.heappush(heap, intervals[i][1])

    return len(heap)

intervals = [(0,30),(5,10), (15,20)]

print(meeting_rooms_ii(intervals))