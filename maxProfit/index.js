// array of numbers(stock price each day)
// [1,2,3,4,5]
// buying on day 1 at $1 and selling on day 5 at $5
// result is $4

const maxProfit = (prices) => {
    let maxPrice = +Infinity // highest number possible
    let maxbenefit = 0 // if there is no profit (prices are lower each day) it would be zero
    for(let i = 0; i < prices.length;i++){ 
        if(prices[i] < maxPrice){  // if the current price is smaller than the highest price in all days
            maxPrice = prices[i] // set the maxPrice to the current price
        } else if ( prices[i] - maxPrice > maxbenefit){ // if current price - maxPrice (for profit) is larger than 0
            maxbenefit = prices[i] - maxPrice
        }
    }
    return maxbenefit
}


// with multiple buy/sells

const multiMaxProfits = (prices) => {
    let day = 0
    let valley = prices[0]
    let peak = prices[0]
    let maxProfit = 0

    while(day < prices.length - 1){ // if there are any daily prices left to compare enter loop

        while(day < prices.length - 1 && prices[day] >= prices[day +1]){ // if next day price is lower than current
            day++ // move days forward until current day is higher than next day
            // this while loop sets valley day
        }
        valley = prices[day] // go to next day if current day is bigger than next day
        while(day < prices.length - 1 && prices[day] <= prices[day +1]){ // if next day price is 
            day++
            // this while loop sets peak day
        }
        peak = prices[day]
        maxProfit += peak - valley // accumulate profits
    }
    console.log(maxProfit)
    return maxProfit
}

multiMaxProfits([7,1,5,3,6,4])