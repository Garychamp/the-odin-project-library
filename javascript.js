function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, isRead) {
  myLibrary.push(new Book(title, author, pages, isRead));
}

const bookFormButton = document.getElementById("book-form-button");
const bookFormDialog = document.getElementById("book-form-dialog");
const bookForm = document.querySelector("form");

bookFormButton.addEventListener ("click", () => {
  bookFormDialog.showModal();
});

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const isReadInput = document.getElementById('isRead');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

