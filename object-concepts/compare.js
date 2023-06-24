const fast = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = fast;

if (fast === third) {
    // console.log('object are equal');
} else {
    //console.log('object are not equal');
}

//compare object after convert string by JSON.stringify()
if (JSON.stringify(fast) === JSON.stringify(second)) {
    //console.log('object are equal');
} else {
    //console.log('object are not equal');
}

//problem  not equal
const fast1 = { a: 1, b: 2 };
const second1 = { b: 2, a: 1 };
if (JSON.stringify(fast1) === JSON.stringify(second1)) {
    //console.log('object are equal');
} else {
    //console.log('object are not equal');
}


//

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const pop in obj1) {
        if (obj1[pop] !== obj2[pop]) {
            return false;
        }
    }
    return true;
}
const result = compareObjects(fast1, second1);
console.log(result);

