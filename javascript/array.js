/* var ages = [10, 20, 30];
var names = ['kajol', 'rani', 'roy', 'sumitra', 'surjakantaroy'];
var oddNumbers = [1, 3, 5, 7, 9];
var elementsCount = names.length;
var indexNumber = ages.indexOf(20);
var number = names[2]; */
// console.log(number);
//console.log(elementsCount);

/* names[1] = 'provashish';
names.push('nishaRoy'); */
//console.log(names);
// names.pop();
//console.log(names);
// var surName = ['dash', 'roy', 'chowdhuri', 'khan', 'shill'];
//surName.shift();
// surName.unshift('kumar', 'royal');
//console.log(surName);

// console.log(10 < 9);
// console.log(20 > 10);
// console.log(10 == 10);
// console.log(10 != 10);

/* var me = 10;
var you = 20; */
//console.log(me == you);
//console.log(me < you || me > you);

/* var nums = [1, 5, 8];
var result = nums.indexOf(0); */
//console.log(result);

// var istrue = true;
// if (istrue == true) {
//     console.log('yes i am roy tonmoy');
// } else {
//     console.log('No you are not tonmoy!')
// }
/* 
var odd = [1, 3, 4, 56, 7];
odd[2] = 100;
console.log(odd); */

/* const array = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    const items = array[i];
    sum = sum + items;
}
console.log(sum); */

/* function getArraySum(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let items = number[i];
        sum = sum + items;
    }
    return sum;
}
const array = [10, 20, 30, 40];
const arraySum = getArraySum(array);
console.log("Array sum is: " + arraySum); */


//Largest array elements.....
/* function getLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const array = [-10, -20, -30, -40, -60, -700, -70, -90, -30, -40, -10];
const largestArray = getLargestNumber(array);
console.log(largestArray); */

//Get Fibonacci series by funtion...


 0 + 1= 1
 1 + 1 = 2
 1 + 2 = 3 
 2 + 3 = 5
 3 + 5 = 8
 5 + 8 = 13

/* function getFibo(num) {

    if (typeof num != 'number') {
        return "please give a number";
    } else if (num < 2) {
        return "please give a number greater than 1";
    } else {
        let fibo = [0, 1];
        for (let i = 2; i < num; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        return fibo;
    }

}
const lastNumber = 'sdsadas';
const getFiboNumber = getFibo(lastNumber);
console.log(getFiboNumber); */


//Create a function called highScore that will recive a 1d array called scores and return the highest score

function highestScore(getScores) {
    highest = getScores[0];
    for (let i = 0; i < getScores.length; i++) {
        if (getScores[i] > highest) {
            highest = getScores[i];
        }
    }
    return highest;
}
const scores = [10, 20, 39, 95, 96, 89, 34, 12, 34, 45, 56, 57];
const highScore = highestScore(scores);
console.log(highScore);