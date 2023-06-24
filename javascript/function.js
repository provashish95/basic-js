// function myFunction() {
//     console.log("i am roy");
//     console.log("you are bad");
// }

// myFunction();
// console.log("hi nisha");
// myFunction();


// function myFunction(a, b, c) {
//     console.log('The price is: ', a);
//     console.log(b, 'is my money ok!');
//     console.log(c, 'is my money ok!');
// }
// var price = 200;
// var demand = 300;
// var demand1 = 30;
// myFunction(price, demand, demand1);



// function myFunction(a) {
//     console.log('The price is : ', a);
//     var shirt = 10;
//     var totall = a / shirt;
//     return totall;
// }

// var price = 200;
// var result = myFunction(price);
// console.log('Totall result is: ', result);

// program to check leap year
function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    } else {
        return false;
    }
}

// take input
const year = 2100;

const isYear = checkLeapYear(year);
console.log(isYear);