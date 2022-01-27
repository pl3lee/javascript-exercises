const getTheTitles = function(books) {
    return books.reduce(function(bookTitles, book) {
        bookTitles.push(book.title);
        return bookTitles;
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
