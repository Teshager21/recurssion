const mergeSort=(array)=>{
const arrayLength = array.length;
if(arrayLength>1){
    let leftArray=[];
    let rightArray=[];
    const mid= Math.floor(arrayLength/2);
    leftArray=array.slice(0,mid);
    rightArray=array.slice(mid,arrayLength);
    mergeSort(leftArray);
    mergeSort(rightArray);
    mergeSortedArray(leftArray,rightArray,array);
}
return array;
}

const mergeSortedArray=(arr1,arr2,array)=>{
    const length =array.length;
    array.length=0;
    for(let i=0;i<length;i++){
        if(arr1.length===0) array.push(...arr2);
        if(arr2.length===0) array.push(...arr1);
        if(arr1.length>0 || arr1.length>0){
            if(arr1[0]>arr2[arr2.length-1]) return array.push(...arr2,...arr1); 
            if(arr1[arr1.length-1]<arr2[0]) return array.push(...arr1,...arr2);
            else (arr1[0]<arr2[0]) ? array.push(...arr1.splice(0,1)):array.push(...arr2.splice(0,1));      
        }
    }
    return array;
    }
    
const array=[3, 2, 1, 13, 8, 5, 0, 1,7,4,10,11,6,9,12];
console.log(mergeSort(array));