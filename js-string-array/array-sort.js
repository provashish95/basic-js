const number = [2, 5, 6, 8, 9, 4, 4, 7, 9, 1, 0];
const names = ['bmi', 'tmi', 'esi', 'karap', 'nupur'];

const numberSort = number.sort();
const namesSort = names.reverse();
//console.log(namesSort);

//reverse using sorting method

const reverseBySorted = names.sort().reverse();
//console.log(reverseBySorted);


//reverse double digit number  

const bigNumber = [12, 34, 56, 77, 89, 90, 12, 2, 344, 667, 889, 99, 999, 12, 100];
const sortedNumber = bigNumber.sort(function(a, b) {
    return a - b;
});
console.log(sortedNumber);