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

const moveX = (el, amount, delay, callback) => {
    setTimeout(() => {
        const maxX = document.body.clientWidth;
        const dimensions = element.getBoundingClientRect();
        const currentRight = dimensions.x + dimensions.width;

        if (currentRight + amount > maxX) {
            failCallback();
        } else {
            el.style.transform = `translateX(${currentRight + amount}px)`;
            successCallback();
        }
    }, delay);
};

//
