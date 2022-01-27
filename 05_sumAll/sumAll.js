const sumAll = function(num1, num2) {
    if ((num1 < 0 || num2 < 0) || (typeof num1 !== 'number') || (typeof num2 !== 'number')) {
        return 'ERROR';
    }
    let tempNum = 0
    let larger = Math.max(num1, num2);
    let smaller = Math.min(num1, num2);
    for (let i = smaller; i <= larger; i++) {
        tempNum += i;
    }
    return tempNum;
};

// Do not edit below this line
module.exports = sumAll;
