const removeFromArray = function(array, element) {
    let elementsRemove = Array.from(arguments);
    elementsRemove.splice(0, 1);
    len = elementsRemove.length
    for (let i = 0; i < len; i++) {
        let newArray = array.filter(function(arrayElement) {
            if (arrayElement !== elementsRemove[i]) {
                return true;
            }
        });
        array = newArray;
    }
    return array;
};

module.exports = removeFromArray;
