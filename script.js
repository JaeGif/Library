// takes UI and constructs new book objects, adding them to the end of the array.

class Library {
    constructor(){
        this.books = []
    } addBookToLibrary(bookObj){
        this.books.push(bookObj)
    } removeBookFromLibrary(bookObj){
        this.books.filter()
    } isInLibrary(name) {
    }
}
class Book {
    constructor(
        name = 'none',
        author = 'none',
        pages = 0,
        status = false,
        ){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    } 
}
// classes in JS. First instantiate the class as an object, then you can use the methods attached to each class
const myLibrary = new Library()
const newBook = new Book('LOTR', 'JRR', 299, false)

/* Open modal on button click */
const addBookBtn = document.getElementById('add-book')
const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('close-modal')
const submitBtn = document.getElementById('submit')

addBookBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})
modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})
submitBtn.addEventListener('click', () => {
    
    modal.style.display = 'none'
})
/* Random Testing of fns */
myLibrary.addBookToLibrary(newBook)
console.log(myLibrary)
