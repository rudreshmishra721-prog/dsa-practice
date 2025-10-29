/**
 * @param {number} x
 * @return {boolean}
 */
    var isPalindrome = function(x) {
    if(x < 0){
        return false
    }
    let String = x.toString();
    let rev = String.split('').reverse().join('')
     return String === rev

};
