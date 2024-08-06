const fibonacciIteration=(number)=>{

    let fibonaciSequence=[];
    for( let i=0;i<number;i++){
         if(i<2) fibonaciSequence.push(i);
         else{
            fibonaciSequence.push(fibonaciSequence[i-2]+fibonaciSequence[i-1]);
         } 
    }

    return fibonaciSequence;

}

const fibonacciRecursive=(number)=>{
let fibonacciSequence=[];

  for( let i=0;i<number;i++){
    fibonacciSequence.push(fibonacci(i));
     
 }

 function fibonacci(num){
    if(num<2) return num;
    else{
      return fibonacci(num-1)+fibonacci(num-2);
    }
      
  }   
  return fibonacciSequence;

}
   





// console.log(fibonacciIteration(14));
console.log(fibonacciRecursive(14));
