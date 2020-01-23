// const willGetDog = new Promise((resolve, reject) => {
//     const rand = Math.random();
//     if (rand < 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// willGetDog
//     .then(() => {
//         console.log("Here's your dog!");
//     })
//     .catch(() => {
//         console.log("I'd never get you a puppy");
//     });

// willGetDog.catch(() => {
//     console.log("I'd never get you a puppy");
// });

// Returning promises from functions //

const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                resolve();
            } else {
                reject();
            }
        }, 5000);
    });
};

makeDogPromise()
    .then(() => {
        console.log("Here's your dog!");
    })
    .catch(() => {
        console.log("I'd never get you a puppy");
    });

// willGetDog.catch(() => {
//     console.log("I'd never get you a puppy");
// });
