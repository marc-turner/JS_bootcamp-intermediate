// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//             setTimeout(() => {
//                 btn.style.transform = `translateX(400px)`;
//                 setTimeout(() => {
//                     btn.style.transform = `translateX(500px)`;
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

const btn = document.querySelector('button');

const moveX = (el, amount, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bodyBoundry = document.body.clientWidth;
            const elRight = el.getBoundingClientRect().right;
            const currLeft = el.getBoundingClientRect().left;

            if (elRight + amount > bodyBoundry) {
                reject({ bodyBoundry, elRight });
            } else {
                el.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }
        }, delay);
    });
};

moveX(btn, 100, 1000)
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 100, 1000))
    .then(() => moveX(btn, 900, 1000))
    .then(() => console.log('DONE AGAIN'))
    .catch(res =>
        console.log(
            `Sorry the most you can go is ${bodyBoundry}, you are at ${elRight}`
        )
    );
