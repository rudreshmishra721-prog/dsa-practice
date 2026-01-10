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