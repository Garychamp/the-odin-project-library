function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

let myLibrary = [];

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
    const bookCard = document.createElement ("div");
    bookCard.classList.add("book-card");
    const titleEl = document.createElement('p');
      titleEl.textContent = book.title;
      bookCard.appendChild(titleEl);
    const authorEl = document.createElement('p');
      authorEl.textContent = book.author;
      bookCard.appendChild(authorEl);
    const pagesEl = document.createElement('p');
      pagesEl.textContent = "Pages: " +book.pages;
      bookCard.appendChild(pagesEl);
    const isRead = document.createElement('p');
      isRead.textContent = book.isRead ? "Read" : "Not Read";
      bookCard.appendChild(isRead);
    const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      bookCard.appendChild(removeBtn);
      removeBtn.classList.add("remove-btn");
     removeBtn.addEventListener("click", () => {
    const bookId = book.id;
      myLibrary = myLibrary.filter((b) => b.id !== bookId);
    render();
});
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Read";
    bookCard.appendChild(toggleBtn);
    toggleBtn.classList.add("toggle-btn");
    toggleBtn.addEventListener("click", () => {
    const bookId = book.id;
    const foundBook = myLibrary.find((b) => b.id === bookId);
      foundBook.isRead = !foundBook.isRead;
  render();
});
libraryContainer.appendChild(bookCard);
})};

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

