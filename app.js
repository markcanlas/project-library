
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


class Book {
    constructor(title, author, totalPages, bookmark) {
        this.title = title;
        this.author = author;
        this.totalPages = totalPages;
        this.bookmark = bookmark;
    }
}


class UI {
//    static displayBooks() {
//         // const StoredBooks = [
//         //     {
//         //         title: 'Harry Potter',
//         //         author: 'JK Rowling',
//         //         totalPages: '3000',
//         //         bookmark: 'checked'
//         //     },
//         //     {
//         //         title: 'Demonic Emperor',
//         //         author: 'Ching Chong',
//         //         totalPages: '1000',
//         //         bookmark: "checked"
//         //     }
//         // ]
//         // const books = StoredBooks;
        
//         books.forEach((book) => UI.addBookToLibrary(book))
//     }
    
    static addBookToLibrary(book) {
        let card = document.createElement('div');
        let h1 = document.createElement('h1')
        let h2 = document.createElement('h3')
        let h3 = document.createElement('h3')
        let btn = document.createElement('button')
        let btn2 = document.createElement('button')
        let isRead = book.bookmark ? `read-btn` : `unread-btn`
        
        container.append(card);
        card.classList.add('card')
        btn.classList.add(isRead)
        btn2.classList.add('remove-btn')
        
        card.append(h1);
        card.append(h2);
        card.append(h3);
        card.append(btn)
        card.append(btn2)
        
        
        
        h1.textContent = `"${book.title}"`;
        h2.textContent = `By: ${book.author}`;
        h3.textContent = `Pages: ${book.totalPages}`;
        btn.innerHTML = book.bookmark ? `READ` : `UNREAD`;
        btn2.innerHTML = `X`


    }

    static removeBook(target) {
        if(target.classList.contains('remove-btn')) {
            target.parentElement.remove();
        }
    }

    static isRead(target){
        if(target.classList.contains('read-btn')){
            target.classList.remove('read-btn')
            target.classList.add('unread-btn')
            target.innerHTML = `UNREAD`
        } else if(target.classList.contains('unread-btn')){
            target.classList.remove('unread-btn')
            target.classList.add('read-btn')
            target.innerHTML = `READ`
        }
    }
      
}

// document.addEventListener('DOMContentLoaded', UI.displayBooks)

form.onsubmit = e => {
    e.preventDefault();

    const title = addTitle.value.trim()
    const author = addAuthor.value.trim()
    const totalPages = addPages.value.trim()
    const bookmark = readCheck.checked

    const book = new Book(title, author, totalPages, bookmark)

    UI.addBookToLibrary(book)

    popupBtn.style.display = 'none';
    form.reset();
}


closeBtn.onclick = e => {
    e.preventDefault();
    popupBtn.style.display = 'none';
    form.reset();
} 
    

addBtn.onclick = () => {
popupBtn.style.display = 'block';
}

container.onclick = e => {
    UI.removeBook(e.target)
    UI.isRead(e.target)
}
   
