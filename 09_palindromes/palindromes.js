const reverseString = function(str) {
    let toReturn = "";
    strlen = str.length;
    for (let i = 0; i < strlen; i++) {
        toReturn += str.substr(-1);
        str = str.slice(0, -1);
    }
    return toReturn;
};
function removePunctuation(str) {
    str = str.replace(/[^A-Za-z0-9]/g,"");
    return str;
}
const palindromes = function (str) {
    let strReversed = removePunctuation(reverseString(str)).toLowerCase();
    return strReversed === removePunctuation(str).toLowerCase() ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
