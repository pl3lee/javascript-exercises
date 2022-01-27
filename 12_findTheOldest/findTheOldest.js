const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    people.sort(function(a, b) {
        let aAge = 0;
        let bAge = 0;
        ('yearOfDeath' in a) ? (aAge = a.yearOfDeath - a.yearOfBirth) :  (aAge = currentYear - a.yearOfBirth);
        ('yearOfDeath' in b) ? (bAge = b.yearOfDeath - b.yearOfBirth) : (bAge = currentYear - b.yearOfBirth);
        
        return ((bAge > aAge) ? 1 : -1);
    });
    return people[0];
};


// Do not edit below this line
module.exports = findTheOldest;
