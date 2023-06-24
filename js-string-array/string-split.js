const anthem = 'amar sonar ban gla ami tomay valobasi';

const word = anthem.split(" ");
//console.log(word);

//slice (start index number, ending index number-1)
const smallSlice = anthem.slice(3, 8);
//console.log(smallSlice);

//substr(start index number , how many index you want)

const anotherPartOfString = anthem.substr(5, 10);
//console.log(anotherPartOfString);

//substring()

const anotherPart = anthem.substring(5, 10);
//console.log(anotherPart);

//concat()

const fast = 'amader';
const second = ' city';
//const fullString = fast + second;
const fullString = fast.concat(second).concat(' tonmoy').concat(' roy');
//console.log(fullString);

//join() addition all array string value than return a string

const letter = ['a', 'b', 'c', 'd', 'e'];
//const allJoint = letter.join('');
const allJoint = letter.join(' ');
//console.log(allJoint);

const str1 = "tonmoy";
const str2 = "roy";
const add = str1.concat(str2);
//const add = str2.concat(str1);
//const add = str2 + str1;
console.log(add);