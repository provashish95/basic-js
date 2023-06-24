function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
const myNumber = 1892;
const isMyNumberEven = isEven(myNumber);
// console.log(isMyNumberEven);

function isLeaper(year) {
    if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

var myYear = 2024;
var isLeapYear = isLeaper(myYear);

// factorial...
function fact(num) {
    factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}



//Declare object ...........

var student = {
    id: 020,
    name: 'Provashish',
    age: 26,
    address: 'Manikgonj'
};

var Phone = {
    price: 20000,
    name: 'Iphone',
    storage: 2.5,
    address: 'Manikgonj'
};
Phone.name = "Samsung"; //update property of object -1
Phone["name"] = "Nokia"; //update property of object -2
var propertyValue = "name";
Phone[propertyValue] = "GrameenPhone"; //update property of object -3

var nameOfPhone = Phone.name; //access property of object
//console.log(nameOfPhone);
console.log(Phone);