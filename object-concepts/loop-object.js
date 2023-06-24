const bottol = {
    name: 'cool',
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
for (const element in bottol) {
    //console.log(element, bottol[element]);
}

const keys = Object.keys(bottol);
for (const elem of keys) {
    //console.log(elem);
}
//console.log(keys);


//advance 
/* const entries = Object.entries(bottol);
const [key, value] = ['color', 'adddress']; */
//console.log(key, value);

for (const [keys, values] of Object.entries(bottol)) {
    console.log(keys, values);
}





