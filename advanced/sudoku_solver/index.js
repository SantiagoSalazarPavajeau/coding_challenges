var solveSudoku = function(board) {
    let row = 0
    let col;
    for(let i = row; i< 9; i++){ // row loop
        col = 0
        for(let j= col; j< 9; j++){ // column loop
            if(board[i][j] !== '.'){
                for(let n = '1'; n <= '9'; n++){ // nums loop
                    if(validBoard(board, i, j, n)){ // backtracking
                        board[i][j] = n
                        if(solveSudoku(board)){ // recursion
                            return true
                        }else{
                            board[i][j] = '.'
                        }
                    }
                }
                return false
            }
            
        }
    }
    return true
};

const validBoard = ( board, row, col, n) => {
    let cubeRow = Math.floor(( row / 3) * 3), cubeColumn = Math.floor((col/3) *3)
    for(let i = 0; i <9; i++){
        // console.log(Math.floor(cubeRow + i / 3))
        // console.log(Math.floor(cubeColumn +i % 3))
    
        if(board[i][col] === n || board[row][i] === n 
            || board[Math.floor(cubeRow + i / 3)][Math.floor(cubeColumn +i % 3)] === n) {
            // access cube by dividing by 3 and modulo of 3
            return false
        }
        
    }
    return true
}