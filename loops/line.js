// //reduce method
// const array1 = [1,2,3,4];

// const ini_val = 3;
// const sumWith_ini = array1.reduce( (acc ,curr) => acc + curr , ini_val ) //acc is empty value acc=0 at first time
// console.log(sumWith_ini)

// const myTotal = array1.reduce(function(acc,currval) {
//     console.log(`acc:- ${acc} and currval is : ${currval}`);
//     return acc + currval
// },4)
// console.log(myTotal);

const shopingCart = [
    { 
        itemName: "js",
        price : 2000
    },
    { 
        itemName: "java",
        price : 2500
    },
    { 
        itemName: "react",
        price : 1200
    },
    { 
        itemName: "dingo",
        price : 5000
    },
    { 
        itemName: "cpp",
        price : 3000
    },
]
const totalPrice = shopingCart.reduce((acc,item) => item.price + acc,0)
console.log(totalPrice);