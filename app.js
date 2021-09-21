let myLibrary = [];

const container = document.querySelector('.book-container');
const addBtn = document.querySelector('.add-btn');
const popupBtn = document.querySelector('.popup-wrapper');
const closeBtn = document.querySelector('.close');
const addTitle = document.querySelector('.title');
const addAuthor = document.querySelector('.author');
const addPages = document.querySelector('.total-pages');
const submitBtn = document.querySelector('.submit-btn');
const readCheck = document.querySelector('.check-box')
const form = document.querySelector('.myForm');


closeBtn.onclick = e => {
    e.preventDefault();
    popupBtn.style.display = 'none';
    form.reset();
} 
    

addBtn.onclick = () => {
popupBtn.style.display = 'block';
}
    
submitBtn.onclick = e => {
    e.preventDefault();
    popupBtn.style.display = 'none';
    addBookToLibrary();
    displayBooks();
    form.reset();
}



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
    let bookTitle = addTitle.value
    let bookAuthor = addAuthor.value
    let bookPages = addPages.value
    let bookRead= readCheck.value

    const books = new Book (bookTitle, bookAuthor, bookPages, bookRead)
    myLibrary.push(books);
}
 
function displayBooks() {


    for(let i = 0; i < myLibrary.length; i++) {
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
        h1.textContent = `Title: "${myLibrary[i].title}"`
        h2.textContent = `Written by: ${myLibrary[i].author}`
        h3.textContent = `Total pages of: ${myLibrary[i].totalPages}`
        btn.innerHTML = `Book have ${myLibrary[i].bookmark}`
    }


    // myLibrary.forEach( book => {
        
    // })
}



