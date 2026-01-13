let Number = [9,8,7,6,5,4,3,2,1]
function selectionSort(array){
    let length = array.length;
    for(let i = 0; i < length; i++){
        let min = i;
        let temp = array[i];
        for(let j = i + 1; j < length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        array[i] = array[min]
        array[min] = temp
    }

}
console.log(selectionSort(Number));
console.log(Number)