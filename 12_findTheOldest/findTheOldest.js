const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    people.sort(function(a, b) {
        let aAge = 0;
        let bAge = 0;
        if ('yearOfDeath' in a) {
            aAge = a.yearOfDeath - a.yearOfBirth;
        } else {
            aAge = currentYear - a.yearOfBirth;
        }
        if ('yearOfDeath' in b) {
            bAge = b.yearOfDeath - b.yearOfBirth;
        } else {
            bAge = currentYear - b.yearOfBirth;
        }
        if (bAge > aAge) {
            return 1;
        } else {
            return -1;
        }
    })
    return people[0];
};


// Do not edit below this line
module.exports = findTheOldest;
