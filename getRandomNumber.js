function getRandomLetter () {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let num = Math.round(Math.random() * characters.length);
    return characters[num];
}

function choosePuppyNamebyThreeRandomLetter () {
    let randomLetters = [];
    for (let i = 0; i < 3; i++) {
        randomLetters.push(getRandomLetter());
    }
    return randomLetters.toString();
}

function generatePassword () {
    let password = '';
    for (let i = 0; i < 10; i ++){
        password += getRandomLetter();
    }
    return password;
}
