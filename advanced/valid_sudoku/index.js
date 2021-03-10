const isValidSudoku = (board) => {

    for(let i = 0; i < 9;i++){
        let row = {}, column = {}, box = {} // unique testers
        
        for(let j = 0; j<9; j++){
            let currRow = board[i][j] // current unique values
            let currCol = board[j][i]
            
            let boxColumn = 3 * Math.floor(i/3) + Math.floor(j/3) //box index
            let boxRow = 3* (i%3) + (j%3) // box index
            let currBox = board[boxColumn][boxRow] // box unique value
            

            
            if(currRow !== '.'){ // row
                
                if(row[currRow]) return false
                
                row[currRow] = true
            }
            
            if( currCol !== '.'){
                
                if(column[currCol]) return false
                
                column[currCol] = true         
            }
            
            if( currBox!== '.'){
                
                if(box[currBox]) return false
                box[currBox] = true
            }
        }
    }
    return true
};