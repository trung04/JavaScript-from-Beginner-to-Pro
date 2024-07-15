function add() {
    console.log(2 + 3);
}

function start() {
    document.querySelector('.button-start').innerHTML = 'Loading...';
    setTimeout(function () {
        document.querySelector('.button-start').innerHTML = 'Finished !';
    }, 1000);
}

function addToCart() {
    document.querySelector('.status-of-cart').innerHTML = 'Added';
    setTimeout(function () {
        document.querySelector('.status-of-cart').innerHTML = '';
    }, 2000);
}

//12h
let messages = 2;

function addMessages() {
    messages++;
}

function minusMessages() {
    messages--;
}

function changeTitle() {
    if (messages > 0) {
        document.title = `(${messages}) New messages`;
    } else {
        document.title = `App`;

    }
}

const multiply = (param1, param2) => param1 * param2;
const countPositive = (array) => {
    let count = 0;
    array.forEach((item) => {
        if (item > 0) count++;
    });
    return count;
}
const addNumber = arr => arr.map((item) => item + 2);
