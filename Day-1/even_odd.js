let arr = [10, 12, 13, 20, 50, 89, 90, 65, 12, 35];

let even = 0;
let odd = 0;

for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
        even = even + arr[i];
    }
    else {
        odd = odd + arr[i];
    }
}

let new_arr=[];
new_arr.push(even);
new_arr.push(odd);

console.log(new_arr);