// function reqListener () {
//     console.log(this.responseText);
//   }

//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "http://www.example.org/example.txt");
//   oReq.send();

// const firstRequest = new XMLHttpRequest();

// firstRequest.addEventListener('load', function() {
//     console.log('WORKING');
//     const data = JSON.parse(this.responseText);
//     const filmURL = data.results[0].films[0];

//     const filmUrlRequest = new XMLHttpRequest();
//     filmUrlRequest.addEventListener('load', function() {
//         console.log('Film Request Working');
//         const filmData = JSON.parse(this.responseText);
//         console.log(filmData.title);
//     });

//     filmUrlRequest.addEventListener('error', function(e) {
//         console.log('Film requests error', e);
//     });

//     filmUrlRequest.open('GET', filmURL);
//     filmUrlRequest.send();
//     // for (let planet of data.results) {
//     //     console.log(planet.name);
//     // }
// });
// firstRequest.addEventListener('error', e => {
//     console.log('NOT WORKING', e);
// });

// firstRequest.open('GET', 'https://swapi.co/api/planets/');
// // firstRequest.setRequestHeader('Accept', 'application/json');
// firstRequest.send();

// const checkStatusAndParse = res => {
//     if (!res.ok) {
//         throw new Error(`Status Code Error: ${res.status}`);
//     }
//     return res.json();
// };

// const printPlanets = data => {
//     console.log('Loaded 10 more planets...');
//     for (let planet of data.results) {
//         console.log(planet.name);
//     }
//     return Promise.resolve(data.next);
// };

// const fetchNextPLanets = url => {
//     return fetch(url);
// };

// fetch('https://swapi.co/api/planets/')
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .then(
//         fetchNextPLanets //data => {
//         //const nextURL = data.next;
//         // const filmURL = data.results[0].films[0];
//         //return fetch(nextURL);
//         // return fetch(filmURL);
//     )
//     .then(checkStatusAndParse)
//     .then(
//         printPlanets //data => {
//         // console.log('Fetch first film with the first planet');

//         // console.log(data);
//     )
//     .catch(err => {
//         console.log('Error Occurred', err);
//     });

// axios
//     .get('https://swapi.co/api/planets/')
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(err => {
//         console.log(`Something Wromg: ${err}`);
//     });

// axios
//     .get('https://swapi.co/api/planets/')
//     .then(({ data }) => {
//         for (let planet of data.results) {
//             console.log(planet.name);
//         }
//         return axios.get(data.next);
//     })
//     .then(({ data }) => {
//         for (let planet of data.results) {
//             console.log(planet.name);
//         }
//     })
//     .catch(err => {
//         console.log(err);
//     });

//  REFACTOR //\
const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
    console.log(url);
    return axios.get(url);
};

const printPlanets = ({ data }) => {
    console.log(data);
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
};

fetchNextPlanets()
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .catch(err => {
        console.log(`ERROR: ${err}`);
    });
