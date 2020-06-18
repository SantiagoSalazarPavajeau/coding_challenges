twodarray = [
                        [1, 1, 1, 0, 0, 0],     
                        [0, 1, 0, 0, 0, 0],    
                        [1, 1, 1, 0, 0, 0],     
                        [0, 0, 2, 4, 4, 0],     
                        [0, 0, 0, 2, 0, 0],    
                        [0, 0, 1, 2, 4, 0]
                    ]

def two_d_hourglass(twodarray)
    hourglass_sums = []
    row_index = 0
    column_index = 0
    while column_index <= 3
        while row_index <= 3  
                sum_of_each_hourglass = 0

                sum_of_each_hourglass += twodarray[row_index][column_index]
                sum_of_each_hourglass += twodarray[row_index][column_index + 1]
                sum_of_each_hourglass += twodarray[row_index][column_index + 2]
                sum_of_each_hourglass += twodarray[row_index + 1][column_index + 1]
                sum_of_each_hourglass += twodarray[row_index + 2][column_index]
                sum_of_each_hourglass += twodarray[row_index+ 2][column_index + 1]
                sum_of_each_hourglass += twodarray[row_index+2][column_index + 2]

                hourglass_sums << sum_of_each_hourglass
                column_index++
        end 
        row_index++
    end 
    twodarray
end

two_d_hourglass(twodarray)