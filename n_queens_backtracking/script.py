from typing import List
import pdb
# class Solution:
#     """
#     example on the left: [1, 3, 0, 2]
#     example on the right: [2, 0, 3, 1]
#     """
#     def solveNQueens(self, n: int) -> List[List[str]]:
#         solutions = []
#         state = []
#         self.search(state, solutions, n)
#         return solutions
    
#     def search(self, state, solutions, n):
#         if len(state) == n:
#             state_string = self.state_to_string(state, n)
#             solutions.append(state_string)
#             return
        
#         if not state:
#             candidates = range(n)
#         else:
#             candidates = self.discard_queens(state, n)

#         for candidate in candidates:
#             # recurse
#             state.append(candidate)
#             self.search(state, solutions, n)
#             state.pop()

#     def discard_queens(self, state, n):
#         # find the next position in the state to populate
#         position = len(state)
#         candidates = set(range(n))
#         # prune down candidates that place the queen into attacks
#         for row, col in enumerate(state):
#             # discard the column index if it's occupied by a queen
#             candidates.discard(col)
#             # discard diagonals
#             dist = position - row
#             candidates.discard(col + dist)
#             candidates.discard(col - dist)
#         return candidates

#     def state_to_string(self, state, n):
#         # ex. [1, 3, 0, 2]
#         # output: [".Q..","...Q","Q...","..Q."]
#         ret = []
#         for i in state:
#             pdb.set_trace()
#             string = '.' * i + 'Q' + '.' * (n - i - 1)
#             ret.append(string)
#         return ret




class Solution:

    def solveNQueens(self, n):
        if n == 1: return [["Q"]]

        columns = set()
        diagonal_up = set()
        diagonal_down = set()

        result = []
        board = [[ "." for __ in range(n)] for _ in range(n)]
        
        def valid_field(row, column):
            diagonal_up_field = row + column
            diagonal_down_field = row - column
            if column in columns or \
               diagonal_up_field in diagonal_up or \
               diagonal_down_field in diagonal_down:
                return False
            else:
                return True
        
        def add_queen(row, column):
            columns.add(column)
            diagonal_up.add(row+column)
            diagonal_down.add(row-column)
            board[row][column] = "Q"
        
        def remove_queen(row, column):
            columns.discard(column)
            diagonal_up.discard(row+column)
            diagonal_down.discard(row-column)
            board[row][column] = "."
        
        def recursion_backtracking_search(row):
            if row == n:
                tmp = []
                for el in board:
                    tmp.append("".join(el))
                result.append(tmp)
            
            for column in range(n):
                if valid_field(row, column):
                    add_queen(row, column)
                    # pdb.set_trace()
                    recursion_backtracking_search(row+1)

                    remove_queen(row, column)
        recursion_backtracking_search(0)
        return result




n = 4

print(Solution().solveNQueens(n))
