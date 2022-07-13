// data structures
class Library {
    constructor() {
        this.books = []
    } addBookToLibrary(bookObj) {
        this.books.push(bookObj)
    } removeBookFromLibrary(buttonName) {
        this.books = this.books.filter(book => book.name != buttonName)
    } statusChange(buttonName, bookObj) {       // change status if read
        this.books.forEach((item) => {
            if (buttonName === item.name) {
                item.status = bookObj.status
            }
        })
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
    emptyLibraryNotice.remove()
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

function createCard(newBook) {
    const newCard = document.createElement('div')
    newCard.className = 'card'

    const subDivTitle = document.createElement('div')
    const subDivAuthor = document.createElement('div')
    const subDivPages = document.createElement('div')
    const subDivRead = document.createElement('div')
    subDivRead.className = 'button-container'


    const newTitle = document.createElement('h3')
    const newAuthor = document.createElement('h3')
    const newPages = document.createElement('h3')

    const titleLoud = document.createElement('p')
    const authorLoud = document.createElement('p')
    const pagesLoud = document.createElement('p')

    const newStatusUpdate = document.createElement('button')
    const newRemoveBtn = document.createElement('button')

    newTitle.textContent = 'Title:'
    newAuthor.textContent = 'Author:'
    newPages.textContent = 'Pages:'
    newRemoveBtn.textContent = 'Remove'

    titleLoud.textContent = newBook.name
    authorLoud.textContent = newBook.author
    pagesLoud.textContent = newBook.pages
    newRemoveBtn.id = newBook.name

    newStatusUpdate.addEventListener('click', ()=> {        // change status listener added
        if (checkBookStatus(newBook)[2] === true) {
            newBook.status = false
            const newStatusArray = checkBookStatus(newBook)
            newStatusUpdate.textContent = newStatusArray[0]
            newStatusUpdate.className = newStatusArray[1]
            myLibrary.statusChange(newRemoveBtn.id, newBook)
        } else {
            newBook.status = true
            const newStatusArray = checkBookStatus(newBook)
            newStatusUpdate.textContent = newStatusArray[0]
            newStatusUpdate.className = newStatusArray[1]
            myLibrary.statusChange(newRemoveBtn.id, newBook)
        }
    })

    newRemoveBtn.addEventListener('click', () => {
        if (newRemoveBtn.id === titleLoud.textContent) {
            newCard.remove()        // remove DOM node and it's children
            myLibrary.removeBookFromLibrary(newRemoveBtn.id)        // remove from data struct
        }
    })

    const statusCheckArray = checkBookStatus(newBook)   // JS doesn't support tuples, packed an array instead
    newStatusUpdate.textContent = statusCheckArray[0]   // array = [text.content, className, boolean]
    newStatusUpdate.className = statusCheckArray[1]

    cardGrid.appendChild(newCard)
    newCard.appendChild(subDivTitle)        // appendChild applies a single node only
    subDivTitle.append(newTitle, titleLoud)     // append applies a set of nodes!
    newCard.appendChild(subDivAuthor)
    subDivAuthor.append(newAuthor, authorLoud)
    newCard.appendChild(subDivPages)
    subDivPages.append(newPages, pagesLoud)
    newCard.appendChild(subDivRead)
    subDivRead.append(newStatusUpdate, newRemoveBtn)
}

function checkBookStatus(bookObj) {
    let statusArray = []
    if (bookObj.status === true) {
        return statusArray = ['Finished', 'read', true]
    } else {
        return statusArray = ['Unfinished', 'unread', false]
    } 
}
const cardGrid = document.getElementById('main-grid')
const emptyLibraryNotice = document.createElement('div')
emptyLibraryNotice.id = 'empty-notice'
emptyLibraryNotice.textContent = 'You have no books! Try adding one.'
cardGrid.appendChild(emptyLibraryNotice)

addBookForm.onsubmit = addBookObj

