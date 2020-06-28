function getRandomNumber () {
    return Math.random();
}

function generateBinaryNumbers () {
    let id = '';
    for (let i = 0; i < 3; i++) {
        id += Math.round(getRandomNumber());
    }
    return id;
}