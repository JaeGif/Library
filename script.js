// takes UI and constructs new book objects, adding them to the end of the array.

class Library {
    constructor(){
        this.books = []
    } addBookToLibrary(bookObj){
        this.books.push(bookObj)
    }/*  removeBookFromLibrary(bookObj){
        this.books.filter()
    } isInLibrary(name) {
    } */
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

/* Open modal on button click */
const addBookBtn = document.getElementById('add-book')
const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('close-modal')
const submitBtn = document.getElementById('submit')
const addBookForm = document.getElementById('form-layout')

addBookBtn.addEventListener('click', () => {
/*     addBookForm.reset()
 */    modal.style.display = 'flex'
})
modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})
         // call add book function when form submits

/* submitBtn.addEventListener('click', () => {
    modal.style.display = 'none'
}) */

function getBookInfo() {
    const userInputName = document.getElementById("name").value
    const userInputAuthor = document.getElementById('author').value
    const userInputPages = document.getElementById('pages').value
    const userInputStatus = document.getElementById('status').checked
    return new Book(userInputName, userInputAuthor,userInputPages,userInputStatus)
}

const addBookObj = (e) => {
    e.preventDefault()
    const newBook = getBookInfo()
    // if book noot in library, then add to library else =>
    myLibrary.addBookToLibrary(newBook)
    console.log(myLibrary)
}


addBookForm.onsubmit = addBookObj


/* Random Testing of fns */