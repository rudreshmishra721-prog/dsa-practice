//Iterative factorial implementation
function FindFactorialItrative(number){
    let  answer = 1
    if( number === 2){
        answer = 2
    }
    for(let i = 2; i <= number; i++){
        answer = answer * i;
    }
    console.log(answer); 
}
FindFactorialItrative(5);

//Recursive factorial implementation
function FindFactoriaRecursive(number){
    if (number === 2){
        return 2;
    }

   return number * FindFactoriaRecursive(number - 1);
}
console.log(FindFactoriaRecursive(5));