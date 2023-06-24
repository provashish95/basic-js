/* const products = [
    'Dell hardcore i29 200TB laptop',
    'Iphone 1TB camera flashlight 000p0Phone',
    'Yellow laptop with black camera',
    '1X59 lenovo yoga laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'Purple color phone with Laptop'
];

const searching = 'laptop';

const output = []; */

//searching by indexOf() method

/* for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output); */

//search by includes() method

/* for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output); */


//searching with first word matching by using startWith() method and also endsWith() method

const products = [
    'Dell hardcore i29 200TB laptop',
    'Iphone 1TB camera flashlight 000p0Phone',
    'DellYellow laptop with black camera',
    '1X59 lenovo yoga laptop',
    'LG supernova laptop',
    'DellHTC low price Phone',
    'Purple color phone with Laptop'
];

const searching = 'Dell';

const output = [];
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);