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

// const makeDogPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random();
//             if (rand < 0.5) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 5000);
//     });
// };

// makeDogPromise()
//     .then(() => {
//         console.log("Here's your dog!");
//     })
//     .catch(() => {
//         console.log("I'd never get you a puppy");
//     });

// willGetDog.catch(() => {
//     console.log("I'd never get you a puppy");
// });

//  Resolving/Rejecting w/ values  //

// const fakeRequest = url => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pages = {
//                 '/users': [
//                     { id: 1, username: 'Frodo' },
//                     { id: 2, username: 'Nikki' }
//                 ],
//                 '/about': 'This is the about page'
//             };
//             const data = pages[url];
//             if (data) {
//                 resolve({ status: 200, data });
//             } else {
//                 reject({ status: 400 });
//             }
//         }, 1000);
//     });
// };

// fakeRequest('/users')
//     .then(res => {
//         console.log('Status Code', res.status);
//         console.log('Data', res.data);
//         console.log('REQUEST COMPLETE');
//     })
//     .catch(res => {
//         console.log('Status Code', res.status);
//         console.log('REQUEST REJECTED');
//     });

// fakeRequest('/contact')
//     .then(res => {
//         console.log('Status Code', res.status);
//         console.log('Data', res.data);
//         console.log('REQUEST COMPLETE');
//     })
//     .catch(res => {
//         console.log('Status Code', res.status);
//         console.log('REQUEST REJECTED');
//     });

// Promise Chaining //

const fakeRequest = url => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: 'Frodo' },
                    { id: 2, username: 'Nikki' }
                ],
                '/users/1': {
                    id: 1,
                    username: 'Frodo',
                    upVotes: 360,
                    city: 'Hobbiton',
                    topPostId: 454321
                },
                '/users/5': {
                    id: 5,
                    username: 'Nikki',
                    upVotes: 571,
                    city: 'Honolulu'
                },
                '/posts/454321': {
                    id: 454321,
                    title: 'Bilbo is a selfish asshole.'
                },
                '/about': 'This is the about page'
            };
            const data = pages[url];
            if (data) {
                resolve({ status: 200, data });
            } else {
                reject({ status: 400 });
            }
        }, 1000);
    });
};

fakeRequest('/users')
    .then(res => {
        console.log(res);
        const id = res.data[0].id;
        return fakeRequest(`/users/${id}`);
    })
    .then(res => {
        console.log(res);
        const postId = res.data.topPostId;
        return fakeRequest(`/posts/${postId}`);
    })
    .then(res => {
        console.log(res);
    })
    .catch(res => {
        console.log('Status Code', res.status);
        console.log('REQUEST REJECTED');
    });
