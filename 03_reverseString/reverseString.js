const reverseString = function(str) {
    let toReturn = "";
    strlen = str.length;
    for (let i = 0; i < strlen; i++) {
        toReturn += str.substr(-1);
        str = str.slice(0, -1);
    }
    return toReturn;
};

// Do not edit below this line
module.exports = reverseString;
