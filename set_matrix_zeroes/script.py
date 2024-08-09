def set_matrix_zeroes(matrix):
    rows = len(matrix)
    columns = len(matrix[0])
    set_first_row_to_zero = False

    # set first item in columns and rows to 0
    for row in range(rows):
        for column in range(columns):
            if matrix[row][column] == 0:
                matrix[0][column] = 0
                
                if row > 0:
                    matrix[row][0] = 0
                else:
                    set_first_row_to_zero = True
    

    #set all the rest of columns and rows marked on previous step
    # except first item in matrix
    for row in range(1, rows):
        for column in range(1, columns):
            if matrix[0][column] == 0 or matrix[row][0] == 0:
                matrix[row][column] = 0

    # set first column to 0
    if matrix[0][0] == 0:
        for row in range(rows):
            matrix[row][0] = 0

    # set first row to zero
    if set_first_row_to_zero:
        for column in range(columns):
            matrix[0][column] = 0

    return matrix

matrix = [
  [0,1],
  [1,1]
]

print(set_matrix_zeroes(matrix))