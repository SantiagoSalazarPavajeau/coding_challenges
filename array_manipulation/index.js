const arrayManipulation = (n, queries) => {
    const list = [];
    const finalValues = [];
    for (let i = 0; i < n; i++) {
        list.push(0);
    }
    
    queries.forEach(function(quer) {
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
    
    list.forEach(function(el) {
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

arrayManipulation([3,7,1], [[1,5],[4,8],[6,9]])