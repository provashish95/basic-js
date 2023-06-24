//when create a variable in a function its called local scope like const result.
//Global scope = declare and use variable anywhere.
// if , switch , for loop , while loop er vetorer area ta ke bole block scope
//let and const is a block scope = > not hoisting 
//var global scope and it is hoisting

function add(a, b) {
    const result = a + b;
    console.log(result);
    return result;
}
const sum = add(10, 20);
