//object literal /object initialization
const student = { name: 'tonmoy', age: 26, address: 'Ghior' };

//using constructor
/* const person = new Object();
console.log(person); */

//const human = Object.create(null);
const human = Object.create(student);
console.log(human.name);

//creating object from class
class people {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peo = new people('provashish', 45);
//console.log(peo);


//syntactical sugar
function mauns(name) {
    this.name = name;
}
const name = new mauns('tonmoy');
console.log(name);