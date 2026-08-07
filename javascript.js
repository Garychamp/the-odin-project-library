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

const libraryContainer = document.getElementById('library');

function render() {
  libraryContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const titleEl = document.createElement('p');
      titleEl.textContent = book.title;
      libraryContainer.appendChild(titleEl);
    const authorEl = document.createElement('p');
      authorEl.textContent = book.author;
      libraryContainer.appendChild(authorEl);
    const pagesEl = document.createElement('p');
      pagesEl.textContent = "Pages: " +book.pages;
      libraryContainer.appendChild(pagesEl);
    const isRead = document.createElement('p');
      isRead.textContent = book.isRead ? "Read" : "Not Read";
      libraryContainer.appendChild(isRead);
})}

bookFormButton.addEventListener("click", () => {
  bookFormDialog.showModal();
});

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const isReadInput = document.getElementById('isRead');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary(titleInput.value, authorInput.value, Number(pagesInput.value), isReadInput.checked);
  render();
  bookFormDialog.close();
  bookForm.reset();
});

render();

