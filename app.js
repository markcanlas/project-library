const container = document.querySelector('.book-container');
const addBtn = document.querySelector('.add-btn');
const popup = document.querySelector('.popup-wrapper');
const form = document.querySelector('.myForm');

let myLibrary = [
    {title: 'harrypotter', author: 'jwrowling', totalPages: '3000', bookmark: 'not read'},
    {title: 'avengers', author: 'wars', totalPages: '300', bookmark: 'read'},
    {title: 'one piece', author: 'oda', totalPages: '5000', bookmark: 'not yet'},
    {title: 'one piece', author: 'oda', totalPages: '5000', bookmark: 'not yet'}
];

addBtn.onclick = () => popup.style.display = 'block';
popup.onclick = () => popup.style.display = 'none';
form.onclick = () => popup.style.display = 'block';


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

