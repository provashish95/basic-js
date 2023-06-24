function megaFriend(friends) {
    let mega = friends[0];
    if (Array.isArray(friends) == false) {
        return "Please provide an array";
    }
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['tonmoy', 'provashish', 'nisha', 'rahul raz', 'sri surja kanta', 'sontosh'];
const megaFrndz = megaFriend(friends);
//console.log(megaFrndz);

//check nisha is exists or not using indexOf() method
/* if (friends.indexOf('nishaa') != -1) {
    console.log("nisha is exists");
} else {
    console.log("nisha is not exists");
} */


//check nisha is exists or not using indexOf() method

/* if (friends.includes('nisha')) {
    console.log("nisha is exists");
} else {
    console.log("nisha is not exists");
} */

//concat() method using array
const num1 = [1, 2, 3, 4, 5, 6];
const num2 = [9, 8, 7, 6, 5];

const combind = num1.concat(num2);
console.log(combind);