function maxBuys(toyPrices, money){
    let totalToys = 0
    toyPrices = toyPrices.sort((a,b)=>a-b)
    console.log(toyPrices)
    for(let i = 0; i<toyPrices.length;i++){
        money -= toyPrices[i]
        if (money > 0){
            totalToys++
        }
        if(money <= 0){
            break;
        }
    }
    console.log(totalToys);
    return totalToys;
}

maxBuys([1,12,5,111,200,1000,10], 50)