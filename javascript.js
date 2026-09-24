class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID();
  }

  toggleRead() {
    this.isRead = !this.isRead;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
   
  addBook(title, author, pages, isRead) {
    this.books.push(new Book(title, author, pages, isRead));
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}

const library = new Library();

const bookFormButton = document.getElementById("book-form-button");
const bookFormDialog = document.getElementById("book-form-dialog");
const bookForm = document.querySelector("form");

const libraryContainer = document.getElementById('library');

function render() {
  libraryContainer.innerHTML = "";
  library.books.forEach((book) => {
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
      library.removeBook(bookId);
    render();
});
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Read";
    bookCard.appendChild(toggleBtn);
    toggleBtn.classList.add("toggle-btn");
    toggleBtn.addEventListener("click", () => {
    book.toggleRead();
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
  library.addBook(titleInput.value, authorInput.value, Number(pagesInput.value), isReadInput.checked);
  render();
  bookFormDialog.close();
  bookForm.reset();
});

render();

