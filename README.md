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

This project is licensed under the MIT License — see the `LICENSE` file for details.

---

MIT License

Copyright (c) 2026 Garychamp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
