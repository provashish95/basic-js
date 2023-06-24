//Copy uniq items from an array ......

/* function getDuplicate(names) {
    const uniqArray = [];
 
    for (const items of names) {
        if (uniqArray.indexOf(items) == -1) {
            uniqArray.push(items);
        }
    }
    return uniqArray;
}
const names = ['tonmoy', 'provashish', 'nisha', 'shuva', 'arpita', 'shuva', 'tonmoy', 'nisha', 'sumi', 'sumi', 'surja', 'provashish', 'roy', 'roy'];

var duplicate = getDuplicate(names); */



/* 
You have a string value 'javascriptloops' now first,  print vowel letters in accending order and second non-vowel letters print normal order as they were.
Output demo: 
a
a
i
o
o
j
v
s
c
r
i
p
t
l
p
s 
*/




// new math ...

/* function woodShop(chairQuantity, tableQuantity, bedQuantity) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 20;
    const chairWood = perChair * chairQuantity;
    const tableWood = perTable * tableQuantity;
    const bedWood = perBed * bedQuantity;
    const totallWood = chairWood + tableWood + bedWood;
    return tableWood;
}
const chair = 10;
const table = 20;
const bed = 20;
const totallCost = woodShop(chair, table, bed);
console.log(totallCost); */

// Foo bar showing code......
/* for (let i = 0; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("foobar");
    } else if (i % 3 == 0) {
        console.log("foo");
    } else if (i % 5 == 0) {
        console.log("bar");
    } else {
        console.log(i);
    }
} */

//Cheapest phone ...
/* 
const phones = [
    { name: ' Nokia n98', price: 1500, camera: '12mp+', storage: '1.5gb' },
    { name: ' Samsung A15', price: 20000, camera: '12mp+', storage: '1.5gb' },
    { name: ' Xaoumi 5 plus', price: 15000, camera: '12mp+', storage: '1.5gb' },
    { name: ' HTC h100', price: 30000, camera: '12mp+', storage: '1.5gb' },
    { name: ' Symphony F-12', price: 14000, camera: '12mp+', storage: '1.5gb' },
    { name: ' Nokia n90', price: 1000, camera: '12mp+', storage: '1.5gb' }
];

let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest); */

//Calculate the total cost of products in a shopping chart.......

/* const products = [
    { name: 'laptop', price: 45000, quantity: 2 },
    { name: 'Shirt', price: 450, quantity: 5 },
    { name: 'watch', price: 400, quantity: 1 },
    { name: 'phone', price: 500, quantity: 3 }
];
let totalPrice = 0;

for (const product of products) {
    var productPrice = product.price * product.quantity;
    totalPrice = productPrice + totalPrice;
}
console.log(totalPrice); */

//Animal count ............
/* function countAnimal(miles) {
    const firstDensityMiles = 10;
    const secondDensityMiles = 50;
    const thirdDensityMiles = 100;
    if (miles <= 10) {
        const first10 = 10 * miles;
        return first10;
    } else if (miles <= 20) {
        const firstDesity = 10 * firstDensityMiles;
        const secondMiles = miles - 10;
        const secondDensity = secondMiles * secondDensityMiles;
        const secondTotal = firstDesity + secondDensity;
        return secondTotal;
    } else {
        const firstDesity = 10 * firstDensityMiles;
        const secondDensity = 10 * secondDensityMiles;
        const secondMiles = miles - 20;
        const thirdDensity = secondMiles * thirdDensityMiles;
        const thirdTotal = firstDesity + secondDensity + thirdDensity;
        return thirdTotal;
    }
}
var result = countAnimal(35);
console.log(result); */


//problem 

var string = 'banglaESH';
var i = 0;
var up = 0;
var low = 0;
while (i < string.length) {
    var character = string.charCodeAt(i);

    if (character > 65 && character < 90) {
        up++;
    }
    if (character > 97 && character < 120) {
        low++;
    }
    i++;
}
if (up > low) {
    console.log(string.toLocaleUpperCase());
} else {
    console.log(string.toLocaleLowerCase());
}