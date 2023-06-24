/*
js have 7 data types

Primitive data 
1.number
2.string
3.boolean
4.undefined
5.null
7.symbol

Non-Primitive data types
6.object
*/

//primitive data example
let a = 'hello';
let b = a;
console.log(a, b);

//change value of a 
a = 'gello';  //create new memory space for new value a for this why value of B not change so B conatins previous value of a
console.log(a, b);

//Non primitve data example
const x = {
    name: 'tonmoy',
    job: 'web developer'
}
const y = x;
console.log(x, y);

x.job = 'front end developer';// not create new memory and value of Y replace by value of X
console.log(x, y);