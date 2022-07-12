// data structures
class Library {
    constructor(){
        this.books = []
    } addBookToLibrary(bookObj) {
        this.books.push(bookObj)
    } removeBookFromLibrary(buttonClass) {
        this.books = this.books.filter(book => book.name != buttonClass)
        console.log(myLibrary)
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
let myLibrary = new Library()

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
    addBookForm.reset()
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
    myLibrary.addBookToLibrary(newBook)
    createCard(newBook)
    addBookForm.reset()
}

addBookForm.onsubmit = addBookObj

function createCard(newBook) {
    const cardGrid = document.getElementById('main-grid')
    const newCard = document.createElement('div')
    newCard.className = 'card'

    const subDivTitle = document.createElement('div')
    const subDivAuthor = document.createElement('div')
    const subDivPages = document.createElement('div')
    const subDivRead = document.createElement('div')
    const subDivButton = document.createElement('div')
    subDivButton.id = 'remove-book-container'


    const newTitle = document.createElement('h3')
    const newAuthor = document.createElement('h3')
    const newPages = document.createElement('h3')
    const newStatus = document.createElement('h3')

    const titleLoud = document.createElement('p')
    const authorLoud = document.createElement('p')
    const pagesLoud = document.createElement('p')
    const statusLoud = document.createElement('p')

    const newRemoveBtn = document.createElement('button')
    newRemoveBtn.className = titleLoud.textContent
    newRemoveBtn.setAttribute('name', 'remove')

    newTitle.textContent = 'Title:'
    newAuthor.textContent = 'Author:'
    newPages.textContent = 'Pages:'
    newStatus.textContent = 'Status:'
    newRemoveBtn.textContent = 'Remove'

    titleLoud.textContent = newBook.name
    authorLoud.textContent = newBook.author
    pagesLoud.textContent = newBook.pages
    newRemoveBtn.id = newBook.name

    if (newBook.status == true) {       // check if book was read
        statusLoud.textContent = 'Completed'
    } else {
        statusLoud.textContent = 'Unfinished'
    }

    newRemoveBtn.addEventListener('click', () =>{
        if (newRemoveBtn.id === titleLoud.textContent) {
            newCard.remove()
            myLibrary.removeBookFromLibrary(newRemoveBtn.id)
        }
    })

    cardGrid.appendChild(newCard)
    newCard.appendChild(subDivTitle)        // appendChild applies a single node only
    subDivTitle.append(newTitle, titleLoud)     // append applies a set of nodes!
    newCard.appendChild(subDivAuthor)
    subDivAuthor.append(newAuthor, authorLoud)
    newCard.appendChild(subDivPages)
    subDivPages.append(newPages, pagesLoud)
    newCard.appendChild(subDivRead)
    subDivRead.append(newStatus, statusLoud)
    newCard.appendChild(subDivButton)
    subDivButton.appendChild(newRemoveBtn)
}