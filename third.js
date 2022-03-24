let number=parseInt(prompt("how many numbers u will enter"));
let array=[];
for(let i=0;i<number;i++){
    let a=parseInt(prompt("Enter number:"));
    array.push(a);
   
}
let arr=[];
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        arr.push(array[i]);
    }
}
console.log(arr);