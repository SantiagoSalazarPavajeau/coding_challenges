// array of numbers(stock price each day)
// [1,2,3,4,5]
// buying on day 1 at $1 and selling on day 5 at $5
// result is $4

const maxProfit = (prices) => {
    const maxPrice = +Infinity // highest number possible
    let maxbenefit = 0 // if there is no profit (prices are lower each day) it would be zero
    for(let i = 0; i < prices.length;i++){ 
        if(price[i] < maxPrice){  // if the current price is smaller than the highest price in all days
            maxPrice = prices[i] // set the maxPrice to the current price
        } else if ( prices[i] - maxPrice > maxbenefit){ // if current price - maxPrice (for profit) is larger than 0
            maxbenefit = prices[i] - maxPrice
        }
    }
    return maxbenefit
}

