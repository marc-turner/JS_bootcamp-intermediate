// function greet() {
//     return 'helllo';
// }

async function greet() {
    return 'hello';
}

greet().then(val => {
    console.log('Promise resolved with: ', val);
});

// function sum(x, y) {
//     return x + y;
// }
// returns 9

async function sum(x, y) {
    return x + y;
}
//  returns: Promise {<resolved>: 9}

async function sum1(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw 'You can only use numbers to find a sum.';
    }
    return x + y;
}

sum1(2, 5)
    .then(val => {
        console.log('resolved with a value of ', val);
    })
    .catch(err => {
        console.log('rejected:', err);
    });
