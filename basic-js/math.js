/* var firstNumber = 0.1;
var secondNumber = 0.02;
var result = firstNumber + secondNumber;
console.log(result.toFixed(2));
console.log(parseFloat(result)); */


//Incremnet and decrement 

var price = 10;
price += 2; // 10 + 2 =12
price++; //12+1 = 13
price--; //13-1= 12
++price; // 12 + 1 =13
--price; //13-1=12
//console.log(price); //12

//Build in method in math ..

const myNumber = 21.0001;
const abs = Math.abs(myNumber); // 21.0001
const ceil = Math.ceil(myNumber); // 22
const floor = Math.floor(myNumber); // 21
const round = Math.round(myNumber); // 21
const random = Math.random() * 10;
//console.log(random.toFixed(2));


//Exchange value... 

/* var num1 = 10;
var num2 = 30;
var temp = num1;
num1 = num2;
num2 = temp;
console.log(num1, num2); */

//another way to swap number-> destructing 
/* var num1 = 10;
var num2 = 20;
[num1, num2] = [num2, num1];
console.log(num1, num2); */


//Find out maximum number using build in method 

/* var num1 = 10;
var num2 = 20;
var num3 = 40;
var mx = Math.max(num1, num2, num3);
console.log(mx); */

//random number maximum 10 and 200 to 400 
/* const output = Math.round(Math.random() * 10);
console.log(output);
var result = 200 + Math.round(Math.random() * 200);
console.log(result); */