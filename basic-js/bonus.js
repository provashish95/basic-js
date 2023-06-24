//task-1

function consoleNumber(i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    consoleNumber(i + 1);
}
//consoleNumber(1);

//task-2

/* let sum = 0;
for (let i = 5; i >= 1; i--) {
    sum = sum + i;
}
console.log(sum); */

/* function sum(i) {
    console.log(i);
    if (i == 1) {
        return 1;
    }
    return i + sum(--i);
}
console.log(sum(5)); */

//task - 3

/* let factorial = 1;
for (let i = 4; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(factorial); */

function factorial(i) {
    console.log(i);
    if (i == 1) {
        return 1;
    }
    return i * factorial(--i);
}
//console.log(factorial(4));

//task-4


/* function compare(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}
const result = compare(15, "15");
console.log(result); */


/* function compare(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}

const result = compare(25, 25);
console.log(result); */


/* console.log("123" + 123); */


/* let a = 'hi';
let b = 'there';
console.log(a + b); */

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(array[i]);
}