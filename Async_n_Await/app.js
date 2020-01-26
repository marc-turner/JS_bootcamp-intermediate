// function greet() {
//     return 'helllo';
// }

// async function greet() {
//     return 'hello';
// }

// greet().then(val => {
//     console.log('Promise resolved with: ', val);
// });

// function sum(x, y) {
//     return x + y;
// }
// returns 9

// async function sum(x, y) {
//     return x + y;
// }
// //  returns: Promise {<resolved>: 9}

// async function sum1(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw 'You can only use numbers to find a sum.';
//     }
//     return x + y;
// }

// sum1(2, 5)
//     .then(val => {
//         console.log('resolved with a value of ', val);
//     })
//     .catch(err => {
//         console.log('rejected:', err);
//     });

// AWAIT //

// w/ Promises //
// function getPlanets() {
//     return axios.get('https://swapi.co/api/planets/');
// }

// getPlanets().then(res => {
//     console.log(res.data);
// });

//  w/ async/await  //
// async function getPlanets() {
//     const res = await axios.get('https://swapi.co/api/planets/');
//     console.log(res.data);
// }

// getPlanets();

// Error handling w/ async/await //

// async function getPlanets() {
//     const res = await axios.get('https://swapi.co/api/plagfdnets/');
//     console.log(res.data);
// }

// method 1 w/ .catch //

// getPlanets().catch(err => {
//     console.log('Error: ', err);
// });

//  method 2 w/ try/catch //

// async function getPlanets() {
//     try {
//         const res = await axios.get('https://swapi.co/api/planrets/');
//         console.log(res.data);
//     } catch (e) {
//         console.log(e);
//     }
// }

// getPlanets();

// MULTIPLE AWAITS //

// const btn = document.querySelector('button');

// const moveX = (el, amount, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const bodyBoundry = document.body.clientWidth;
//             const elRight = el.getBoundingClientRect().right;
//             const currLeft = el.getBoundingClientRect().left;

//             if (elRight + amount > bodyBoundry) {
//                 reject({ bodyBoundry, elRight, amount });
//             } else {
//                 el.style.transform = `translateX(${currLeft + amount}px)`;
//                 resolve();
//             }
//         }, delay);
//     });
// };

// async function animateRight(el, amt) {
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
//     await moveX(el, amt, 1000);
// }

// animateRight(btn, 100).catch(({ bodyBoundry, amount, elRight }) => {
//     console.log(`Canot move! Body is ${bodyBoundry}px wide.`);
//     console.log(`Element is at ${elRight}px, ${amount} is too wide.`);
// });

// moveX(btn, 100, 1000)
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 900, 1000))
//     .then(() => console.log('DONE AGAIN'))
//     .catch(({ bodyBoundry, amount, elRight }) => {
//         console.log(`Canot move! Body is ${bodyBoundry}px wide.`);
//         console.log(`Element is at ${elRight}px, ${amount} is too wide.`);
//     });

// PARALLEL VS. SEQUENTIAL REQUESTS //

// SEQUENTIAL //
// async function get3Pokemon() {
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }

// PARALLEL ///
// async function get3Pokemon() {
//     const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

//     const poke1 = await prom1;
//     const poke2 = await prom2;
//     const poke3 = await prom3;

//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }

// get3Pokemon();

//  PROMISE.ALL  //

async function get3Pokemon() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

    const results = await Promise.all([prom1, prom2, prom3]);

    console.log(results);
}

get3Pokemon();
