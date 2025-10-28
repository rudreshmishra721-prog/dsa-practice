/**
 * @param {number} x
 * @return {boolean}
 */
    var isPalindrome = function(x) {
    if(x < 0){
        return false
    }
    let string = x.toString();
    let reverse = str.split('').reverse().join('')
     return string === reverse

};