let arr=[10,20,30,40,50];

arr.splice(3,0,4,5);

console.log(arr);

// Checking Duplicates

let arr1=[10,20,30,20,40];
let flag=0;
for(let i=0;i<arr1.length;i++)
{
    let start_index=arr1.indexOf(arr[i]);
    let end_index=arr1.lastIndexOf(arr[i]);

    if(start_index!=end_index){
        flag=1;
    }
}
console.log(arr1);

if(flag==0)
{
    console.log("No Duplicate found");
}
else{
    
    console.log("Duplicate found");
}




