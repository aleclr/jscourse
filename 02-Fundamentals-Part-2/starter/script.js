'use strict';

// example of strict mode functionalities

let hasDriversLicense = false;
const passedTest = true;

/*
if (passedTest) {
    hasDriverLicense = true; //wrong variable name
};
*/

if (hasDriversLicense) console.log('i can drive');

//challenge #1

const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

let avgDolphins = calcAverage(85, 54, 49);
let avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolphins, avgKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Team Dolphins are the winners! Final Score: ${avgDolphins.toFixed(1)} vs. ${avgKoalas}`);
    } else if (avgDolphins <= (avgKoalas / 2)) {
                console.log(`Team Koalas are the winners! Final Score: ${avgKoalas} vs. ${avgDolphins}`);
            } else {
                console.log('No teams have won.');
            }
};

checkWinner(avgDolphins, avgKoalas);

/*
//challenge #2

const calcTip = (billValue) => {
    if (billValue >= 50 && billValue <= 300) {
        let tipValue = billValue * 0.15;
        return tipValue;
    } else {
        let tipValue = billValue * 0.2;
        return tipValue;
    }
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

//challenge #2.a

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemdtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
    //calcAge: function(birthYear) {return 2037 - birthYear}
    //calcAge: function() {return 2037 - this.birthYear}
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year-old ${this.job}, and he ${this.hasDriversLicense ? "does" : "doesn't"} have a drivers license.`
    }
};

// "Jonas has 3 friends, and his best friend is Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);

console.log(jonas);
console.log(jonas.calcAge());
console.log(jonas.age);
//console.log(jonas.calcAge());
//console.log(jonas['calcAge'](1991));

// challenge #2.b
// Jonas is a 46 year-old teacher, and he does/doesn't have a drivers license.

console.log(jonas.getSummary());

// challenge #3

const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.99,
    calcBMI: function () {
        this.bmi = (this.weight / (this.height ** 2)).toFixed(2);
        return this.bmi 
    }   // lack of gumption
};

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {return this.bmi = (this.weight / (this.height ** 2)).toFixed(2)} // i'm a bean LOL
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s bmi (${mark.calcBMI()}) is higher than ${john.fullName}'s bmi (${john.calcBMI()})`);
} else if (john.bmi === mark.bmi) {
    console.log(`${mark.fullName}'s bmi (${mark.calcBMI()}) is equal than ${john.fullName}'s bmi (${john.calcBMI()})`);
} else {
    console.log(`${john.fullName}'s bmi (${john.calcBMI()}) is higher than ${mark.fullName}'s bmi (${mark.calcBMI()})`);
};

// for loops

for(let rep = 1; rep <= 10; rep++) {
    console.log(`Repetition number ${rep}`)
};

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for(let i = 0; i < jonasArray.length ; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
    types.push(typeof jonasArray[i]);
    //could be  types[i] = typeof jonas[i];
};

console.log(types);

// looping backwards
for(let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
};

// loop inside loop
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    };
};

// while loop

let rep = 1;
while (rep <= 10) {
    console.log(`Repetition number ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Congratulations, you rolled the max value!');
};

// challenge #4

const calcTip = (billValue) => {
    if (billValue >= 50 && billValue <= 300) {
        let tipValue = billValue * 0.15;
        return tipValue;
    } else {
        let tipValue = billValue * 0.2;
        return tipValue;
    }
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

let averageTotals = 0;

for(let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + calcTip(bills[i]));
};


console.log(tips);
console.log(totals);

const calcAverage2 = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    };
    return averageTotals = sum / arr.length;
};

calcAverage2(totals);
console.log(averageTotals);