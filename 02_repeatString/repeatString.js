const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    toReturn = ""
    for (let i = 0; i < num; i++) {
        toReturn += string;
    }
    return toReturn;
};

// Do not edit below this line
module.exports = repeatString;
