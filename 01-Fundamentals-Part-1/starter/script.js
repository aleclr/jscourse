    
    // BMI CALCULATOR
    // BMI CALCULATOR
    // BMI CALCULATOR

    const weightMark = 78;
    const heightMark = 1.69;

    const weightJohn = 92;
    const heightJohn = 1.95;

    let markBMI = null;
    let johnBMI = null;

    let markHigherBMI = false;

    function calculateMark(weightMark, heightMark) {
        console.log(weightMark, heightMark);
        let bmi = weightMark / (heightMark ** 2);
        markBMI = bmi.toFixed(2);
        return;
    };

    function calculateJohn(weightJohn, heightJohn) {
        console.log(weightJohn, heightJohn);
        let bmi = weightJohn / (heightJohn ** 2);
        johnBMI = bmi.toFixed(2);
        return;
    };
    
    calculateMark(weightMark, heightMark);
    calculateJohn(weightJohn, heightJohn);
    //template literals, aka string interpolation
    console.log(`Mark's BMI is ${markBMI}, and John's is ${johnBMI}`);
    
    if (markBMI > johnBMI) {
        markHigherBMI = true;
    };

    if (markHigherBMI) {
        console.log('Mark has a higher BMI than John');
    } else {
        console.log('Mark has a lower BMI than John')
    };


    // AVERAGE SCORE COMPARISON
    // AVERAGE SCORE COMPARISON
    // AVERAGE SCORE COMPARISON


    const dolphinsFirstScore = 197;
    const dolphinsSecondScore = 170;
    const dolphinsThirdScore = 188;

    const koalasFirstScore = 187;
    const koalasSecondScore = 195;
    const koalasThirdScore = 190;

    let dolphinsAverage = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
    console.log(`The average score of Team Dolphins is ${dolphinsAverage.toFixed(2)}!`);

    let koalasAverage = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;
    console.log(`The average score of Team Koalas is ${koalasAverage.toFixed(2)}!`);


    if ( (dolphinsAverage || koalasAverage ) >= 100 ) {
        if (dolphinsAverage === koalasAverage) {
            console.log("It's a draw!");
        } else {
            if (dolphinsAverage > koalasAverage) {
                console.log('Team Dolphins are the winners! Congratulations!!');
            } else {
                console.log('Team Koalas are the winners! Congratulations!!');
            }
        }
    } else {
        console.log('Neither team scored an average greater than the mininum required.')
    };
    

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

// x ? ____ : _____


// TIP CALCULATOR USING TERNARY OPERATORS
const billValue = 430;
const tipValue = (billValue >= 50) && (billValue <= 300) ? billValue * 0.15 : billValue * 0.2;

console.log(`The total bill value was $${billValue}, resulting in a tip of $${tipValue} and a total amount of $${billValue + tipValue}.`);