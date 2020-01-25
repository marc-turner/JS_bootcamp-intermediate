// function reqListener () {
//     console.log(this.responseText);
//   }

//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "http://www.example.org/example.txt");
//   oReq.send();

const firstRequest = new XMLHttpRequest();

firstRequest.addEventListener('load', function() {
    console.log('WORKING');
    const data = JSON.parse(this.responseText);
    const filmURL = data.results[0].films[0];

    const filmUrlRequest = new XMLHttpRequest();
    filmUrlRequest.addEventListener('load', function() {
        console.log('Film Request Working');
        const filmData = JSON.parse(this.responseText);
        console.log(filmData.title);
    });

    filmUrlRequest.addEventListener('error', function(e) {
        console.log('Film requests error', e);
    });

    filmUrlRequest.open('GET', filmURL);
    filmUrlRequest.send();
    // for (let planet of data.results) {
    //     console.log(planet.name);
    // }
});
firstRequest.addEventListener('error', e => {
    console.log('NOT WORKING', e);
});

firstRequest.open('GET', 'https://swapi.co/api/planets/');
// firstRequest.setRequestHeader('Accept', 'application/json');
firstRequest.send();
