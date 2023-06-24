const student = {
    name: 'tonmoy',
    id: 101,
    balance: 5000,
    mejor: 'computer',
    subject: ['english', 'bangla', 'ict', 'database'],
    bestFriend: {
        name: 'kundu',
        subject: 'Mathematics'
    },
    takeExam: function () {
        console.log(this.name + ' Taking exam');
    },
    treat: function (money, tips) {
        this.money = this.balance - money - tips;
        return this.money;
    }
}
student.takeExam();
const rem = student.treat(4000, 100);
console.log(rem);
