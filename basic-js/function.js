function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;

    return sum;
}

// var total = add(80, 20);

// console.log(total);

function singara(money) {
    var singaraPrice = 10;
    quantity = money / singaraPrice;
    return quantity;
}
var myMoney = 200;
var foodItem = singara(myMoney);

// console.log(foodItem);


function square(number) {
    var result = Math.pow(number, 2);
    return result;
}

// var result = square(6);
// console.log(result);

var mobile = {
    name: 'samsung',
    brand: 'BD',
    price: 10000
}
var myComputer = {
    name: 'lenovo',
    color: 'gray',
    price: 120000
}

var properties = Object.keys(myComputer); //get all keys of an object 
var propertiesValue = Object.values(myComputer); //get all values of an object 

// console.log(myComputer);
myComputer.name = 'HP';
// console.log(myComputer);
var name = 'name';
myComputer[name] = 'Samsung';
// console.log(myComputer);
// ----------------------------------------
var shoppingCart = {
    books: 12,
    keyboard: 2,
    shoes: 1,
    pen: 10,
    mouse: 21,
    sunglass: 1
}


var keys = Object.keys(shoppingCart);
var values = Object.values(shoppingCart);

for (var i = 0; i < keys.length; i++) {
    var properties = keys[i];
    var propertiesValue = shoppingCart[properties];
    //console.log(properties, propertiesValue);
}

for (var propertiesName in shoppingCart) {
    var value = shoppingCart[propertiesName];
    // console.log(propertiesName, value);
}

function foo() {
    console.log('foo');
    bar();
}

function bar() {
    console.log('bar');
}
//foo();

function make_avg(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    var avg = sum / 3;
    return avg;
}
var values = make_avg(10, 2, 3);
// console.log(values);

function make_avg1(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        sum = sum + element
    }
    var length = arr.length;
    var avg = sum / length;

    return avg;
}

var array = [10, 2, 3, 10, 5, 10, 10];
var Average = make_avg1(array);
//console.log(Average.toFixed(2));

function even_odd(number) {
    // var Plus = '+';
    // var Minus = '-';
    if (number % 2 == 0) {
        console.log(number + ' is even number!');
        //return Plus;
    } else {
        console.log(number + ' is odd number!');
        //return Minus;
    }
}

//console.log(even_odd(20));
var movie = { name: 'Din the day', model: 'sky' };
console.log(movie["model"]);
