'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, className = '') => {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}m people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = (msg) => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// const getCountryData = (country) => {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     //   transforming and destructuring response data from json string to an javascript object
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)}m people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// const getCountryAndNeighbour = (country) => {
//   //  AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     //   transforming and destructuring response data from json string to an javascript object
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //  render country1
//     renderCountry(data);

//     //  get neighbour country
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     //  AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       //not array anymore because searched using code, so dont need destructuring
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('japan');

//  AJAX
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

//  Promises
// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getJSON = (url, errorMessage = 'Something went wrong.') => {
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error(`${errorMessage} ${response.status}`);
//     }
//     return response.json();
//   });
// };

// const getCountryData = (country) => {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found.')
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders;
//       console.log(neighbour);
//       if (!neighbour) throw new Error('No neighbour found.');
//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour[0]}`,
//         'Country not found.'
//       );
//     })
//     .then((data) => {
//       renderCountry(data, 'neighbour');
//     })
//     .catch((err) => {
//       console.log(err);
//       renderError(`Something went wrong, ${err.message}. Please try again.`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// // btn.addEventListener('click', function () {
// //   getCountryData('japan');
// // });

// const getJSON2 = (url, errorMessage = 'Something went wrong.') => {
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error(`${errorMessage} ${response.status}`);
//     }
//     return response.json();
//   });
// };
// const getGeoLocation = (coord1, coord2) => {
//   console.log('function fired');
//   getJSON2(`https://geocode.xyz/${coord1},${coord2}?json=1`)
//     .then((data) => {
//       console.log(data.country);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return getJSON2(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then((data) => {
//       console.log(data);
//       renderCountry(data[0]);
//     })
//     .catch((err) => {
//       console.log(err);
//       renderError(`Something went wrong. ${err.message}`);
//     });
// };

// getGeoLocation(19.037, 72.873);

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is hapenning...');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       //the value in the resolve function is what gets passed to the .then handler
//       resolve('You win!');
//     } else {
//       //the value in the reject function is what gets passed to the error
//       reject(new Error('You lost!'));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// //Promisifying settimeout
// const wait = function (seconds) {
//   //dont need reject cause timer never fails
//   return new Promise((resolve) => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('i waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('i waited for 1 second'));

console.log('Getting position');

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (err) => reject(err)
    );
    //also could be just navigator.geolocation.getCurrentPosition(resolve, reject)
  });
};

getPosition().then((pos) => console.log(pos));

const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await res.json();
  console.log(res);
  renderCountry(data[0]);
};

whereAmI('portugal');
console.log('first thing');
