


const reverseInteger = (x) => {
    if(x < 0){
        x = Math.abs(x) // control negative numbers
        x = x.toString().split('').reverse().join('') // convert int to string then to array then back to string
        x = -x // return negative integer
    }else{
        x = x.toString().split('').reverse().join('')
        x = parseInt(x) // 
    }
    
    
    if( x > Math.pow(2,31) - 1  || x < -Math.pow(2,31) ){ // maximum a 32-bit integer
        return 0;
    }
    
    return x
}