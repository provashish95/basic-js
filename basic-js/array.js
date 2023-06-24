//replace array elements by index number
var names = ['tonmoy', 'roy', 'nisha', 'riya', 'puja'];
names[0] = 'Provashish';
// console.log(names);

//find array elements using indexOf() method
var friendsAge = [12, 23, 45, 56, 78, 89];
//console.log(friendsAge.indexOf(891));

//add elements in an array PUSH()
var numbers = [2, 3, 5, 67, 12, 23, 34, 45, 56, 67];
numbers.push(100, 200, 300);
// console.log(numbers);

//delete elements of an array Pop()
var popElement = numbers.pop(); //pop method return deleted element
// console.log(numbers);
// console.log(popElement);

// var arr = [12, 22, 45, 67, 89, 24, 25];


// for (var j = 0; j < arr.length; j++) {
//     var element = arr[j];
//     if (element > 50) {
//         continue; 
//     }
//     console.log(element);
// }

// var marks = [13, 15, 14, 20, 18];
// for (var i = 0; i < marks.length; i++) {
//     if (marks[i] >= 15) {
//         break;
//     }
//     console.log(marks[i]);
// };
// var name = "false";
// console.log(typeof (name));


// var i = 5;
// for (; i < 5; i++) {
//     console.log(i);
// }

var arr = [true, false, true, true, false, true, true, true, false, true];
var arr1 = [];

for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (element == true) {
        arr1.push(i);
    }
}
console.log(arr1.length);

