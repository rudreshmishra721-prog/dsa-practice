/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let  lowerPrice = prices[0]
  let  maxProfit = 0;
  for(let i = 0; i < prices.length; i++){

    if (!prices || prices.length === 0){
        return 0;
    } 

    if(lowerPrice > prices[i]){
         lowerPrice = prices[i]
    }else if(prices[i] - lowerPrice > maxProfit ) {
        maxProfit = prices[i] - lowerPrice

    }
  }
  return maxProfit 
};