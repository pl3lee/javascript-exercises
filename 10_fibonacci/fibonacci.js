const fibonacci = function(num) {
    if (Number(num) < 1) {
        return "OOPS"
    }
    num = Number(num)
    let firstNum = 1;
    let secondNum = 1;
    for (let i = 3; i <= num; i++) {
        let tempNum = firstNum;
        firstNum = secondNum;
        secondNum = Number(tempNum) + Number(firstNum);
    }
    return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;
