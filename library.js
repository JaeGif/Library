class myLibrary {
    constructor() {
        this.books = []
    } // add book
    // remove book
}
class Book {
    constructor(
        name = 'none',
        author = 'none',
        pages = 0,
        status = false
        ){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

function addBookToLibrary() {
 // Stuff
}
let newBook = new Book('LOTR', 'JRR', 299, false) 
console.log(newBook.name)

// takes UI and constructs new boook objects, adding them to the end of the array.