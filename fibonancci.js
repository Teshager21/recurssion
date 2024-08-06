const fibonacciIteration=(number)=>{

    let fibonaciSequence=[];

    for( let i=0;i<number;i++){
         if(i<=1) fibonaciSequence.push(i);
         else{
            fibonaciSequence.push(fibonaciSequence[i-2]+fibonaciSequence[i-1]);
         } 
    }

    return fibonaciSequence;

}

console.log(fibonacciIteration(14));