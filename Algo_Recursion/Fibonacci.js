function FibonacciIterative(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n]
}
console.log(FibonacciIterative(8));

function FibonacciRecursive(n){
    if(n < 2){
        return n;
    }
    return FibonacciRecursive(n -1) + FibonacciRecursive(n - 2)
}
console.log(FibonacciRecursive(8));