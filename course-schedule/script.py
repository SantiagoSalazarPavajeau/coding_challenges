import pdb

def course_schedule(number_of_courses, prerequisites):
    adjecency_list = {}
    visited = set()
    for a,b in prerequisites:
        if a not in adjecency_list.keys():
            adjecency_list[a]= [b]
        else:
            adjecency_list[a].append(b)
    
    def dfs(current):
        if current in visited: return False

        if current in adjecency_list.keys() and adjecency_list[current] is []: 
            return True

        visited.add(current)

        if current in adjecency_list.keys():
            for neighbor in adjecency_list[current]:
                if not dfs(neighbor): 
                    return False

        visited.remove(current)

        # pdb.set_trace()

        if current in adjecency_list.keys(): adjecency_list[current] = []

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