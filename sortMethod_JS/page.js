console.log("sorting method in javaScript");

const arr = [10,1,5,'mjjj',7,80,100];
console.log(arr);
const b= arr.sort((x,y)=>{
    // return x-y;
    return y-x;
})
console.log(b);