// x << 1 is times 2
// x >> 1 is divided by 2


const divide = (dividend, divisor) => {
    if (divisor === 0) return 0;
    if (dividend === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) return 2147483647;

//     if(dividend === Math.pow(-2,31)
//       && divisor === -1){
//         return 2147483647
//     }
  
//     if(dividend === Math.pow(2,31)-1
//       && divisor === 1){
//         return 2147483647
//     }
  
  // if(dividend === -2147483648
  //   && divisor === 1){
  //     return -2147483648
  // }
  
  // console.log(Number.MIN_VALUE)
  
  let dividend = Math.abs(dividend)
  let posDivisor = Math.abs(divisor)
  let result = 0

  while(dividend >= posDivisor){
      
      let binaryPosition = 0
      
      while(dividend >= posDivisor << 1 << binaryPosition){ //O (log n)
          binaryPosition++
      }
      result += 1 << binaryPosition
      dividend -= posDivisor << binaryPosition
  }
  

  
  // console.log(dividend >= 0)
  // console.log(divisor >= 0)
  
  return dividend >= 0 === divisor >= 0 ? result : -result
};