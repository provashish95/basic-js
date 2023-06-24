const student = {
    name: 'provashish',
    id: 101,
    money: 5000,
    treat: function (expense) {
        this.money = this.money - expense;
        console.log('This is key word called', this);
        return this.money;
    }
}
const student2 = {
    name: 'tonmoy',
    id: 102,
    money: 6000
}
const student3 = {
    name: 'nisha',
    id: 103,
    money: 8000
}
const result1 = student.treat.bind(student2);
const result2 = student.treat.bind(student3);
student.treat(200);
result1(500);
result1(400);
result2(2000);


