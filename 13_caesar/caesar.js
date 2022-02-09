function replaceCharAt(string, char, index) {
    let newstr = string.substring(0, index) + char + string.substring(index + 1);
    return newstr;
}

const caesar = function(string, shift) {
    let strlen = string.length;
    let newstr = string;
    for (let i = 0; i < strlen; i++) {
        let asciiCode = string.charCodeAt(i);
        if (((65 <= asciiCode) && (asciiCode <= 90)) || ((97 <= asciiCode) && (asciiCode <= 122))) {
            if (shift >= 0) {
                for (let k = 0; k < shift; k++) {
                    if (asciiCode + 1 === 91) {
                        //console.log("hello")
                        asciiCode = 65;
                    } else if (asciiCode + 1 === 123) {
                        //console.log("hello")
                        asciiCode = 97;
                    } else {
                        //console.log("hello")
                        asciiCode += 1;
                    }
                }
            } else {
                for (let k = 0; k < (-1 * shift); k++) {
                    if (asciiCode - 1 === 64) {
                        asciiCode = 90;
                    } else if (asciiCode - 1 === 96) {
                        asciiCode = 122;
                    } else {
                        asciiCode -= 1;
                    }
                }
            }
            newstr = replaceCharAt(newstr, String.fromCharCode(asciiCode), i);
        } else {
            continue;
        }
    }
    return newstr;
};

// Do not edit below this line
module.exports = caesar;
