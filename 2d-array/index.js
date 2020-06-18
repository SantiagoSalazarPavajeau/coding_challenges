const twodarray = [
                [1, 1, 1, 0, 0, 0],     
                [0, 1, 0, 0, 0, 0],    
                [1, 1, 1, 0, 0, 0],     
                [0, 0, 2, 4, 4, 0],     
                [0, 0, 0, 2, 0, 0],    
                [0, 0, 1, 2, 4, 0]
            ]

twoDimensionalArrayHourglass(twodarray)

function twoDimensionalArrayHourglass(array){
    let hourGlassSums = []
    for(let row = 0; row <= 3; row++){
        for(let column = 0; column <= 3; column++){
            let hourGlassSum = 0
            hourGlassSum += array[row][column];
            hourGlassSum += array[row][column + 1];
            hourGlassSum += array[row][column + 2];
            hourGlassSum += array[row + 1][column + 1];
            hourGlassSum += array[row + 2][column]; 
            hourGlassSum += array[row + 2][column + 1];
            hourGlassSum += array[row + 2][column + 2];
            hourGlassSums.push(hourGlassSum)
        }
    }
    console.log(Math.max(...hourGlassSums))
    console.log(hourGlassSums)

}