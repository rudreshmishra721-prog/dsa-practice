//better time complexity
var firstUniqChar = function(s){
     let freq = {}  
    // or  let map = new Map();
     for(let char of s){
        freq[char] = (freq[char] || 0) +1
        // or map.set(char , (map.get(char) || 0) +1)
     }
     for(let i = 0; i < s.length; i++){
        if(map.get(s[i]) === 1){
            return i
        }
     } 
     return -1

}

 console.log(firstUniqChar('leetcode'))


// brute force
var firstUniqChar = function(s){
    for(let i = 0; i<s.length; i++){
        unique = true
        for(let j = 0; j<s.length; j++){
            if(  i !== j && s[i] === s[j]){
                 unique = false 
                 break;

            }
        }
        if(unique){
            return i
        }
    }
    return -1

}
console.log(firstUniqChar('loveleetcode'))

