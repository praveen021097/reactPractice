// function fibb(n){
    
//     let a= 0;
//     let b=1;
//     let arr =[0,1];
    
   
//     for(let i=0; i<n-2; i++){
        
//         let sum = arr[i]+arr[i+1];
//         arr.push(sum)
      
//     }
//     console.log(arr.join(" "));
// }
// fibb(8);

// let str ="praveen";
// console.log(str[4])


// let arr =[1,23,4,5,6,7,8,9,9,6,8,66,445];

// function checkBig(arr){
//     let temp =0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<arr[i+1]){
//             temp = arr[i+1]
//         }
//     }
//     console.log(temp)
// }
// checkBig(arr)


// function checkprime(n){
//     let sqr =Math.sqrt(n);
//     for(let i=2; i<=sqr; i++){
//         if(n%i==0){
//             return false
//         }
//     }
//     return true
// }

// console.log(checkprime(36))

function fact(n){
    if(n==1){
        return n
    }
   return n*fact(n-1)
}

console.log(fact(5))