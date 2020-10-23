// Manipulation Data
// a b k
// 1 5 3
// 4 8 7
// 6 9 1

// Array to be Manipulated is 1-index based and has all zeros
//  1 2 3  4  5 6 7 8 9 10 
// [0,0,0, 0, 0,0,0,0,0, 0]
// 
// Result
// [3,3,3, 3, 3,0,0,0,0, 0]
// [3,3,3,10,10,7,7,7,0, 0]
// [3,3,3,10,10,8,8,8,1, 0]

// Instructions
// On index a to b of array add k and accumulate past iteration so its the same array

arrayManipulation([3,7,1], [[1,5],[4,8],[6,9]])

const arrayManipulation = (k, rangeAB) => {
    const list = [];
    const finalValues = [];
    for (let i = 0; i < k; i++) { // create array
        list.push(0);
    }
    // rangeAB = [[1,5],[4,8],[6,9]]
    rangeAB.forEach((quer) => {
        let start = quer[0] - 1;
        let end = quer[1];
        let val = quer[2];
        
        list[start] += val;
        if (end < list.length) {
            list[end] -= val;
        }
    });
    
    let accum = 0;
    let max = list[0];
    
    list.forEach((el) => {
        accum += el;
        max = Math.max(accum, max);
    });
    
    // console.log(list);
    // console.log(n);
    // console.log(queries);
    // console.log(finalValues);
    console.log(max);

    return max;
}

