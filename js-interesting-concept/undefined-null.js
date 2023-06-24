/*
1.Variable declare but value not set get undefined
2.Function called but function not write returned get undefined
3.Function called & write return but not return any value or variable / or others get undefined
4.Parameter not send  get undefined
5.Property that doesn't exist in an object get undefined 
6.Accessing array elements out of range get undefined
7.Accessing deleted array elements  get undefined
8. When any variable value is undefined get undefined
*/


/* 
No: 1
let first;
console.log(first); 
*/

/*
No: 2
 function get(x, y) {
    const sum = x + y;
}
const result = get(10, 20);
console.log(result); 
*/


/* 
No: 3
function add(a, b) {
    const sum = a + b;
    return;
}
const result = add(10, 20);
console.log(result);
 */

/* 
No: 4
function sub(x, y) {
    const add = x + y;
    console.log(y);
    return add;
}
const result = sub(10);
console.log(result);
 */

/* 
No: 5
const student = { name: 'provashish', age: 26, address: 'Ghior' };
console.log(student.phone);
 */

/* No: 6+7
const six = [12, 34, 45, 67, 78, 89];
console.log(six[10]); */

/* 
No: 8
const seventh = undefined;
console.log(seventh); */

