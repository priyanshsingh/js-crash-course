// Asynchronous JavaScript Code

console.log("Start");

setTimeout(() => {
    console.log("Hello!!!");
}, 5000);

console.log("End");

// All Callback functions are not necessarily asynchrnous!!!

console.log("Start");

const items = [1,2,3,4,5,6,7,8,9];

items.forEach((item) => {
    console.log(item);
})

console.log("End");
