// takes UI and constructs new book objects, adding them to the end of the array.

class myLibrary {
    constructor(){
        this.books = []
    } addBookToLibrary(bookObj){
        this.books.push(bookObj)
    } removeBookFromLibrary(){
        // remove using associated index
    }
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
// classes in JS. First instantiate the class as an object, then you can use the methods attached to each class
const library = new myLibrary()
const newBook = new Book('LOTR', 'JRR', 299, false)
const newBook2 = new Book('LOTR', 'JRR', 299, false)
const newBook3 = new Book('LOTR', 'JRR', 299, false)

library.addBookToLibrary(newBook)
library.addBookToLibrary(newBook2)
library.addBookToLibrary(newBook3)

console.log(library)
