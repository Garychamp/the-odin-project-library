# The Odin Project Library

A book library app built with vanilla JavaScript — add books, track read/unread status, and manage your personal collection. Data is represented using constructors and classes and is rendered to the DOM for the current session.

## Features

- Add books with title, author, pages, and read/unread status
- Toggle a book's read status
- Remove books from your collection
- Simple, framework-free implementation using ES6 classes and DOM manipulation

## Demo / Run locally

1. Clone the repository:

   git clone https://github.com/Garychamp/the-odin-project-library.git

2. Open the project folder and either open `index.html` in your browser, or serve the folder with a static server (recommended for some browsers):

   python -m http.server 8000
   # then open http://localhost:8000

No build step is required.

## Usage

- Click the "New Book" (or Add Book) button to open the entry form.
- Fill in the book details and submit to add the book to the library display.
- Use the read/unread toggle to change a book's status.
- Use the remove button to delete a book from the collection.

Note: This project stores data in the DOM for the current page session. Collection data is not persisted across page reloads unless you add persistence (for example, localStorage).

## Project structure

- index.html — main HTML file and UI markup
- styles.css — styles and layout
- javascript.js (or main.js) — application logic (constructors/classes and DOM handling)

Adjust file names above if your code uses a different filename (e.g., `main.js`).

## Technologies

- JavaScript (ES6)
- HTML5
- CSS3

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a branch for your changes: `git checkout -b my-feature`
3. Commit your changes with a clear message
4. Push the branch to your fork
5. Open a pull request

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.
