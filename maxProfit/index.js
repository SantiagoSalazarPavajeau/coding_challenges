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


// super slow O(n^n)


const slowMaxProfit = (prices) => {
    return slowestLoopAndRecursion(prices, 0)
}

const slowestLoopAndRecursion = (prices, currentDay) => {
    if(currentDay >= prices.length)
        return 0
    
    let allDaysMax = 0
    for( let i = currentDay; i < prices.length; i++){ // use i to keep track of current day's price

        let profitByTransaction = 0 

        for(let j = i + 1; j < prices.length; j++){ // use j to expand to next days

            if(prices[i] < prices[j]){ // if the next days price is higher than the present day

                const result = slowestLoopAndRecursion(prices, j+1) + prices[j] - prices[i] // try with each increasingly consecutive day (j+1) in recursion until next days price is lower

                if (result > profitByTransaction){ // compare and set daily profit to result if the result is larger than 0
                    profitByTransaction = result
                }
            }
        }
        if(profitByTransaction > allDaysMax){ // compare and set to highest when current day's price is higher than next day's price
            allDaysMax = profitByTransaction
        }
    }
    console.log(allDaysMax)
    return allDaysMax
}

slowMaxProfit([7,1,5,3,6,4])