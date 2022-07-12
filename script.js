// takes UI and constructs new book objects, adding them to the end of the array.

class Library {
    constructor(){
        this.books = []
    } addBookToLibrary(bookObj){
        this.books.push(bookObj)
    }/* /*   removeBookFromLibrary(){
        this.books = this.books.filter() 
    }*/
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
    modal.style.display = 'flex'
})
modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})
submitBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

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
    // if book not in library, then add to library else =>
    myLibrary.addBookToLibrary(newBook)
    createCard(newBook)
}
/* const removeBookObj = 
 */
addBookForm.onsubmit = addBookObj

function createCard(newBook) {
    const cardGrid = document.getElementById('main-grid')
    const newCard = document.createElement('div')
    newCard.className = 'card'
    const subDiv = document.createElement('div')
    const newH3 = document.createElement('h3')
    const newP = document.createElement('p')
    const newEm = document.createElement('em')
    const newRemoveBtn = document.createElement('button')
    
    for (let i=0; i<=3; i++){       // append new elements with custom classes
                                    // so that the text content can be assigned later
                                    // according to the new className
        cardGrid.appendChild(newCard)
        newCard.className = 'card-' + String(i)

        newCard.appendChild(subDiv)
        subDiv.appendChild(newH3)
        newH3.className = 'h3-' + String(i)

        subDiv.appendChild(newP)
        newP.className = 'p-' + String(i)

        newP.appendChild(newEm)
        newEm.className = 'em-' + String(i)
    }
}
