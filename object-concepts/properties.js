const bottol = { color: 'yellow', hold: 'water', price: 50, isCleaned: true };
const keys = Object.keys(bottol); //get all properties names from a object 
const keys1 = Object.values(bottol); // get alll properties values  from a object
const keys2 = Object.entries(bottol); // get alll properties names + values  from a object
//console.log(keys2);

//delete object properties
const botto2 = { name: 'cool', color: 'yellow', hold: 'water', price: 50, isCleaned: true };
Object.seal(botto2); //not delete any properties from bottol2 object 
botto2.price = 5000; //change value after seal object but not deleted
delete botto2.name; //delete name of a object 
botto2.height = 5.5; //not add properties in a object after sealing object
Object.freeze(botto2); // not allow delete add or change nothing
console.log(botto2);
