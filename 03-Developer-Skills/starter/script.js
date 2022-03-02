// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//const x = 'x gon give it to ya';

const calcAge = (birthYear) => {
  return 2037 - birthYear;
};

console.log(calcAge(1991));

// challenge #1

const printForecast = (arr) => {
  let forecast = `... `;
  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}°C in ${i + 1} days ... `;
  }
  return forecast;
};

console.log(printForecast([12, 5, -5, 0, 4]));
