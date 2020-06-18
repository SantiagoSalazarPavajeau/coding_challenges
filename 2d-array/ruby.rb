const twodarray = [
    [1, 1, 1, 0, 0, 0],     
    [0, 1, 0, 0, 0, 0],    
    [1, 1, 1, 0, 0, 0],     
    [0, 0, 2, 4, 4, 0],     
    [0, 0, 0, 2, 0, 0],    
    [0, 0, 1, 2, 4, 0]
]
2d_hourglass(twodarray)

def 2d_hourglass(2d_array)
    hourglass_sums = []
    2d_array.each_with_index do |row_value, row_index|
        2d_array.each_with_index do |column_value, column_index|
            if row_index <= 3 && column_index <= 3
                
            else
                break
            end
        end
    end

end