from collections import defaultdict
import pdb

def course_schedule(number_of_courses, prerequisites):
    adjecency_list = defaultdict(list)
    visited = set()
    for a,b in prerequisites:
        adjecency_list[a].append(b)
    
    def dfs(current):
        # if there current has already been visited
        # there is a cycle
        if current in visited: return False

        if adjecency_list[current] is []: return True

        visited.add(current)

        for neighbor in adjecency_list[current]:
            if not dfs(neighbor): 
                return False

        visited.remove(current)

        # pdb.set_trace()

        adjecency_list[current] = []

        return True

    for node in adjecency_list.keys():
        if not dfs(node):
            return False
    
    return True


number_of_courses = 2
prerequisites = [[0,1],[1,0]]

number_of_courses1 = 2
prerequisites1 = [[1,0]]

print(course_schedule(number_of_courses, prerequisites))

print(course_schedule(number_of_courses1, prerequisites1))