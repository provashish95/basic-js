//Problem-1

function anaToVori(ana) {

    //Check type of input and Negative value for return error message.
    if (typeof ana != 'number') {
        return "Please enter number";
    } else if (ana < 0) {
        return "Negative value is not accepted !";
    } else {
        const amountOfVori = ana * 0.0625; // 1 ana = 0.0625 vori
        return amountOfVori;
    }
}
const amountOfAna = 64;
const totalAmountOfVori = anaToVori(amountOfAna);
//console.log(totalAmountOfVori);

//Problem-2

function pandaCost(singara, somucha, jilapi) {
    //Check type of input and Negative value for return error message.
    if (typeof singara != 'number' || typeof somucha != 'number' || typeof jilapi != 'number') {
        return "Please enter number";
    } else if (singara < 0 || somucha < 0 || jilapi < 0) {
        return "Negative value is not accepted !";
    } else {
        const singaraPrice = singara * 7; //Per piece singara's price is 7 taka.
        const somuchaPrice = somucha * 10; //Per piece somucha's price is 10 taka.
        const jilapiPrice = jilapi * 15; //Per piece jilapi's price is 15 taka.
        const totalFoodPrice = singaraPrice + somuchaPrice + jilapiPrice;
        return totalFoodPrice;
    }
}
const pieceOfSingara = 1;
const pieceOfSomucha = 10;
const pieceOfJilapi = 20;

const totalAmount = pandaCost(pieceOfSingara, pieceOfSomucha, pieceOfJilapi);
//console.log(totalAmount);


//Problem -3

function picnicBudget(totalPerson) {
    /* Set the initial value of the first 100 costing 
    second 100 costing and third up to costing of per person. */
    const firstCategoryCost = 5000;
    const secondCategoryCost = 4000;
    const thirdCategoryCost = 3000;
    //Check type of input and Negative value for return error message.
    if (typeof totalPerson != 'number') {
        return "Please enter a number !";
    } else if (totalPerson < 0) {
        return "Negative value is not accepted !";
    } else {
        if (totalPerson <= 100) {
            const firstAmount = firstCategoryCost * totalPerson;
            return firstAmount;
        } else if (totalPerson >= 101 && totalPerson <= 200) {
            const firstCategoryAmount = firstCategoryCost * 100;
            const secondCategoryPersons = totalPerson - 100;
            const secondCategoryAmount = secondCategoryCost * secondCategoryPersons;
            const secondAmount = firstCategoryAmount + secondCategoryAmount;
            return secondAmount;
        } else {
            const firstCategoryAmount = firstCategoryCost * 100;
            const secondCategoryAmount = secondCategoryCost * 100;
            const thirdCategoryPersons = totalPerson - 200;
            const thirdCategoryAmount = thirdCategoryCost * thirdCategoryPersons;
            const thirdAmount = firstCategoryAmount + secondCategoryAmount + thirdCategoryAmount;
            return thirdAmount;
        }
    }
}
const totalPerson = 12;
const totalCost = picnicBudget(totalPerson);
//console.log(totalCost);

//Problem-4

function oddFriend(friends) {
    //Declare variabele for storing our expected result.
    let oddFriendName = '';
    //Check array is empty, array type and array value is number or not return error message.
    if (friends.length == 0) {
        return "Your array is empty";
    } else if (Array.isArray(friends) == false) {
        return "Please enter string items of array";
    } else if (typeof friends[0] == 'number') {
        return "Your array item is number !";
    } else {
        for (let i = 0; i < friends.length; i++) {
            if (friends[i].length % 2 != 0) {
                oddFriendName = friends[i]; //Store odd friend name to oddFriendName variable.
                break;
            }
        }
    }
    return oddFriendName;
}
const friendList = ['nish', 'tonmoy', 'provashish', 'rajib', 'shuva', 'sumi', 'niloy', 'kawsar', 'santosh'];
const oddFriendName = oddFriend(friendList);
//console.log(oddFriendName);