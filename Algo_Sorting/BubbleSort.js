let Number = [9,8,7,6,5,4,3,2,1]

function SortNumber(array){
    let length = array.length
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length - 1; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;


            }
        }
    }
}

SortNumber(Number);
console.log(Number)