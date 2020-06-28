function getRandomLetter () {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let num = Math.round(Math.random() * characters.length);
    return characters[num];
}