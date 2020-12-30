// given a list of prices [7,1,5,3,6,4]
// find maximum profit 
// from buying one day at lower 
// and selling at higher


var maxProfit = function(prices) {
    
    if (prices.length === 0){
        return 0
    }
    let current = 0
    let max = 0
    for(let i = 0; i<prices.length; i++){
        
        for(let j = i+1; j<prices.length; j++){
        // O(n^2) nested loop
        // inner loop on i+1 to always compare to next elements
            if(prices[j] - prices[i] > 0){
                current = prices[j] - prices[i]
                console.log("current",current)
                console.log("max", max)
            }
        max = Math.max(current, max) 
        // compare profits save higher
        }
    }
    return max
};