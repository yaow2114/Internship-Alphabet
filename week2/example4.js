// let fruits = [
//     {
//         postion: 1,
//         name: "cake"
//     },
//     "junk",
//     {
//         postion: 3,
//         name: "oven"
//     },
//     {
//         postion: 4,
//         name: "ruler"
//     }
// ]
// fruits.splice(2,1);

// console.log(fruits);
// console.log(fruits[2]);

let fruits = [];
fruits.push("1");
fruits.push("2");
fruits.push("3");
fruits.push("4");
fruits.splice(7,0,"2");
fruits.splice(4,1);
console.log(fruits);
