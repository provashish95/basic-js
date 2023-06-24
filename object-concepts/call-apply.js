const student = {
    name: 'provashish',
    id: 101,
    money: 5000,
    treat: function (expense, tips, tax) {
        this.money = this.money - expense - tips - tax;
        console.log('This key word called', this);
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
//student.treat.call(student2, 3000, 2000, 50);

student.treat.apply(student2, [3000, 2000, 90]);
student.treat.apply(student3, [5000, 2000, 500]);


