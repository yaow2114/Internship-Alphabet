function trueOrFalse() {
    let num = Math.round(Math.random());
    console.log(num);
    return num === 0 ? false : true;
}

function sayWinOrLose(trueOrFalse) {
    if (trueOrFalse) return "You Win!";
    return "You Lose :(";
}

// console.log(trueOrFalse());
console.log(sayWinOrLose(trueOrFalse()));