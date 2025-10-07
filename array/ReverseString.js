// reverse a string 
// create a function that reverse an string 
// input "hi my name is rudresh mishra"
//output "arhsim hserdur si eman ym ih"

function reverseString(inputString){
    let rivArray = [];
    let stringlength = inputString.length - 1;
    if(!inputString || inputString.length < 2 ||  typeof inputString !== 'string' ){
        return "hmm kuch toh gadbad hai baba"
    }
     for(i = stringlength; i >= 0; i--){
        
        rivArray.push(inputString[i])
     }
     console.log(rivArray);
     return rivArray.join('')
}

console.log (reverseString('hi my name is rudresh mishra'))