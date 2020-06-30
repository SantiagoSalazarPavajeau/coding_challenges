
// Brute Force
// this has a time complexity of O[n^3]
let countTripletsBF = (array, commonMultiple)=>{
    let totalTriplets = 0
    console.log(`Finding triplets in [${array}]...`)
    for(let i =0;i<array.length;i++){
        for(let j =0;j<array.length;j++){
            for(let k =0;k<array.length;k++){
                if(array[i]* commonMultiple === array[j] && array[j] * commonMultiple === array[k]){
                    totalTriplets++
                    console.log(`${totalTriplets}. [${array[i]}, ${array[j]}, ${array[k]}]`)

                }
            }
        }
    }
    console.log(`The total triplets in [${array}] with a common ratio/multiple of ${commonMultiple} are ${totalTriplets}.`)
    return totalTriplets;
}

countTripletsBF([1,3,3,9], 3)

