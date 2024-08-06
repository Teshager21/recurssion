const mergeSort=(array)=>{
//divide

const arrayLength = array.length;
if(arrayLength>1){
    const mid= Math.floor(arrayLength/2);
    const leftArray=[];
    const rightArray=[];
    for(let i=0;i<mid;i++){
        leftArray.push(array[i]);
    }
    for(let i=mid;i<arrayLength;i++){
        rightArray.push(array[i]);
    }
  mergeSort(leftArray);
  mergeSort(rightArray);
console.log('sorting....',leftArray,rightArray);  
}



}


const array=[3, 2, 1, 13, 8, 5, 0, 1];
mergeSort(array);