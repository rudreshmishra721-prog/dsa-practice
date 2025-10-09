// mergesortarray question 
// input mergeSortArray([0,3,4,31],[4,6,30]);
// output wants [0,3,4,4,6,30,31]

function mergeSortArray(arr1, arr2){
   let  i = 0;
  let  j = 0;
   const merged = []   // make emptly array

   while(i < arr1.length || j < arr2.length){   // loop untill i , j or both are smaller then length of an array
                                                // || (OR OPERATOR DOES ARR1.LENGHT < i LOOP WORKS EVEN 
                                                // IF J < arr2.LENGTH = FALSE ) 
    console.log(arr1 , arr2)
    if(!arr2[j] || arr1[i] < arr2[j]){          // !ARR[2] MEANS IF ARR2[ELEMENT = UNDEFINED OR EMPTY IN LAST BECAUSE 
                                                //THERE WAS AN 31 IN ARR 1 BUT NO ELE IN ARR 2 THEN IT DIRECTLY PUSH 31 TO MERGE ]
        merged.push(arr1[i]);
        i++;
    }else{
        merged.push(arr2[j]);
        j++;
    }
   }
   return merged

}
 console.log(mergeSortArray([0,3,4,31],[4,6,30])) 


 // DSA NOTEBOOK