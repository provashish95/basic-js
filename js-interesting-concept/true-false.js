/*
Falsy:
false
0 
empty string 
undefined
Null
NaN
-----------------------------------------
Truthy: 
true
any number (positive or negative)
any string including any single white space
empty array []
empty object {}
*/

const x = '0 ';
if (x) {
    console.log('x is truthy');
} else {
    console.log('x is falsy');
}