//arguments like an array 

function addNumbers(num1, num2) {
    //console.log(arguments[3]);
    //console.log(arguments.length);

    let result = 0;
    for (const number of arguments) {
        result = result + number;
    }

    //const result = num1 + num2;
    return result;
}
const sum = addNumbers(10, 20, 30, 40, 50, 90, 80, 60, 100);
//console.log(sum);


function getName(fname, lname) {
    //const fullName = fname + ' ' + lname;
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getName("hanif", "songket", "provashish");
console.log(name);