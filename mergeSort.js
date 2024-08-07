const mergeSort=(array)=>{
//divide
const arrayLength = array.length;
if(arrayLength>1){
    const mid= Math.floor(arrayLength/2);
    let leftArray=[];
    let rightArray=[];
    for(let i=0;i<mid;i++){
        leftArray.push(array[i]);
    }
    for(let i=mid;i<arrayLength;i++){
        rightArray.push(array[i]);  
    }
    mergeSort(leftArray);
    mergeSort(rightArray);
    mergeSortedArray(leftArray,rightArray,array);
  console.log('array after returning',array);
}

}

const mergeSortedArray=(arr1,arr2,array)=>{
    const length =array.length;
    array.length=0;
    let smallerArray=[],largerArray=[],mergedArray=[];
    if(arr1.length<arr2.length) {
        smallerArray=[...arr1];
        largerArray=[...arr2];
    }else{
        smallerArray=[...arr2];
        largerArray=[...arr1];
    }
    for(let i=0;i<length;i++){
     if(smallerArray.length>0){
        if(smallerArray[0]>largerArray[largerArray.length-1]){
            array.push(...largerArray,...smallerArray);
            return array;
        }
        if(smallerArray[smallerArray.length-1]<largerArray[0]){
            array.push(...smallerArray,...largerArray);
            return array;
        }else{
            if(smallerArray[0]<largerArray[0]){
                array.push(smallerArray[0]);
                smallerArray.shift();
            }else{
                array.push(largerArray[0]);
                largerArray.shift(); 
            }
        }
     }else{
        array.push(...largerArray);
     }
    
    
    }
    return array;
    }
    

 console.log('merge',mergeSortedArray([3,4,5,10,22],[2,5,6,7,8,9],[]));
const array=[3, 2, 1, 13, 8, 5, 0, 1,7,4,10,11];
 mergeSort(array);