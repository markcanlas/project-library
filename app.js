const container = document.querySelector('.book-container');
const addBtn = document.querySelector('.add-btn');
const popupBtn = document.querySelector('.popup-wrapper');
const closeBtn = document.querySelector('.close');

let myLibrary = [];

addBtn.onclick = () => popupBtn.style.display = 'block';
closeBtn.onclick = () => popupBtn.style.display = 'none';



class Book {
    constructor(title, author, totalPages, bookmark) {
        this.title = title;
        this.author = author;
        this.totalPages = totalPages;
        this.bookmark = bookmark
    }
}

function addBookToLibrary() {
    // do stuff here
    let bookTitle= prompt('Book title?');
    let bookAuthor = prompt('Book author?');
    let bookPages = prompt('Total book pages?');
    let bookRead= prompt('Book have read or not?');

    const books = new Book (bookTitle, bookAuthor, bookPages, bookRead)
    myLibrary.push(books);
}
 
function displayBooks() {
    myLibrary.forEach( book => {
        let card = document.createElement('div');
        let h1 = document.createElement('h3')
        let h2 = document.createElement('h3')
        let h3 = document.createElement('h3')
        let btn = document.createElement('button')
        container.append(card);
        card.classList.add('card')
        btn.classList.add('read-btn')
        card.append(h1);
        card.append(h2);
        card.append(h3);
        card.append(btn)
        h1.textContent = `Title: "${book.title}"`
        h2.textContent = `Written by: ${book.author}`
        h3.textContent = `Total pages of: ${book.totalPages}`
        btn.innerHTML = `Book have ${book.bookmark}`
    })
}
displayBooks();

