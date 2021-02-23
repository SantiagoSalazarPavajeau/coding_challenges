

var fib = function(n) {
    //     if(n < 2) return n
//     let secondToLast = 0
//     let last = 1
//     let current;
    
//     for(let i = 2; i<=n;i++){
        
//         current = last + secondToLast
//         secondToLast = last
//         last = current

//     }
    
//     return current
    
if(n === 0)return 0
if(n === 1)return 1

// let fibSeq = {
//     0: 0,
//     1: 1
// }

let fibSeq = [0,1]

for(let i = 2; i < n ; i++){
    fibSeq[i] = fibSeq[i -1] + fibSeq[i-2]
}
console.log(fibSeq)
// console.log(Object.values(fibSeq))
return fibSeq[n]

    // let gR = (1+ Math.sqrt(5)) / 2
    // return Math.round(Math.pow(gR, n))/ Math.sqrt(5)
};
