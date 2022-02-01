console.log("Something!");
var a = 45;
var b = 55;
console.log("The value of a + b = ", a+b);
console.log("The value of a - b = ", a-b);
console.log("The value of a * b = ", a*b);
console.log("The value of a / b = ", a/b);
console.log("The value of a % b = ", a%b);
console.log("***********SPACE INTENDED***************");

var c = b;
c += 2;
console.log(c);

function avg(a, b){
    return (a+b)/2;
}
console.log(avg(4,6));

console.log("***********SPACE INTENDED***************");


var age = 18;
if (age>18){
    console.log("Can vote in the elections!");
}
else if(age=18){
    console.log("Make your Vote ID Card!");
}
else{
    console.log("Can NOT vote in the elections!");
}
console.log("***********SPACE INTENDED***************");

var arr = [1,2,3,4,5,6,7,8,9];
// for(var i = 0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }

arr.forEach(element => {
    console.log(element);
});

console.log("***********SPACE INTENDED***************");

let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}